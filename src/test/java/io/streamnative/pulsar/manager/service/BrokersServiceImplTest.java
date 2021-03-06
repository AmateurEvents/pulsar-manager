/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.streamnative.pulsar.manager.service;

import com.google.common.collect.Maps;
import io.streamnative.pulsar.manager.PulsarManagerApplication;
import io.streamnative.pulsar.manager.entity.EnvironmentEntity;
import io.streamnative.pulsar.manager.profiles.SqliteDBTestProfile;
import io.streamnative.pulsar.manager.utils.HttpUtil;
import java.util.Map;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.modules.junit4.PowerMockRunnerDelegate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(PowerMockRunner.class)
@PowerMockRunnerDelegate(SpringRunner.class)
@PowerMockIgnore( {"javax.management.*", "javax.net.ssl.*"})
@PrepareForTest(HttpUtil.class)
@SpringBootTest(
    classes = {
        PulsarManagerApplication.class,
        SqliteDBTestProfile.class
    }
)
@ActiveProfiles("test")
public class BrokersServiceImplTest {

    @Autowired
    private BrokersService brokersService;

    @Test
    public void brokersServiceTest() throws Exception{
        PowerMockito.mockStatic(HttpUtil.class);
        Map<String, String> header = Maps.newHashMap();
        header.put("Content-Type", "application/json");
        PowerMockito.when(HttpUtil.doGet("http://localhost:8080/admin/v2/clusters/standalone/failureDomains", header))
                .thenReturn("{\"test\":{\"brokers\":[\"tengdeMBP:8080\"]}}");

        EnvironmentEntity environmentEntity = new EnvironmentEntity();
        environmentEntity.setName("test-environment");
        environmentEntity.setBroker("http://localhost:8080");
        PowerMockito.when(HttpUtil.doGet("http://localhost:8080/admin/v2/brokers/standalone", header))
                .thenReturn("[\"tengdeMBP:8080\"]");
        Map<String, Object> result = brokersService.getBrokersList(
                1, 1, "standalone", "http://localhost:8080");
        Assert.assertEquals(result.get("total"), 1);
        Assert.assertEquals(result.get("data").toString(), "[{failureDomain=[test], broker=tengdeMBP:8080}]");
        Assert.assertEquals(result.get("pageSize"), 1);
    }
}
