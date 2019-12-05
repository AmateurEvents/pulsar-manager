/*
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
/*
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  route: {
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link'
  },
  navbar: {
    logOut: 'Logout',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  sidebar: {
    clusters: 'Clusters',
    clusterInfo: 'Cluster Details',
    tenants: 'Tenants',
    namespaces: 'Namespaces',
    topics: 'Topics'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    name: 'Name',
    serviceUrl: 'Service Url',
    brokerServiceUrl: 'BrokerServiceUrl',
    tenant: 'Tenants',
    namespace: 'Namespaces',
    role: 'Role',
    clusters: 'Clusters',
    addRole: 'AddRole',
    addCluster: 'AddCluster',
    config: 'Config',
    policies: 'Policies',
    description: 'Description',
    update: 'Update',
    topic: 'Topic',
    stats: 'Stats',
    partition: 'Partition',
    cluster: 'Cluster',
    subscription: 'Subscription',
    unsubscription: 'Unsubscription',
    grant: 'Grant',
    limit: 'Limit',
    schemas: 'Schemas',
    brokers: 'Brokers',
    internalConfig: 'InternalConfig',
    runtimeConfig: 'RuntimeConfig',
    dynamicConfig: 'DynamicConfig',
    healthCheck: 'HealthCheck',
    functions: 'Functions',
    start: 'Start',
    stop: 'Stop',
    restart: 'Restart',
    trigger: 'Trigger',
    configName: 'ConfigName',
    configValue: 'ConfigValue',
    sources: 'Sources',
    builtin: 'Builtin',
    sinks: 'Sink',
    quotas: 'Quotas',
    monitor: 'Monitor',
    allowedClusters: 'Allowed Clusters',
    adminRoles: 'Admin Roles'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  breadcrumb: {
    management: 'Management',
    clusters: 'Clusters',
    clusterInfo: 'Cluster Details',
    brokers: 'Brokers',
    brokerInfo: 'Broker Details',
    isolationPolicies: 'Isolation Policies',
    isolationPolicyInfo: 'Isolation Policy Details',
    failureDomains: 'Failure Domains',
    failureDomainInfo: 'Faillure Domain Details',
    tenants: 'Tenants',
    tenantInfo: 'Tenant Details',
    namespaces: 'Namespaces',
    namespaceInfo: 'Namespace Details',
    topics: 'Topics',
    topicInfo: 'Topic Details',
    subscriptions: 'Subscriptions',
    subscriptionInfo: 'Subscription Details'
  },
  tabs: {
    config: 'CONFIG',
    broker: 'BROKERS',
    bookie: 'BOOKIES',
    namespace: 'NAMESPACES',
    overview: 'OVERVIEW',
    topic: 'TOPICS',
    policies: 'POLICIES',
    configuration: 'CONFIGURATION',
    failuredomains: 'FAILURE DOMAINS',
    isolationpolicies: 'ISOLATION POLICIES',
    storage: 'STORAGE'
  },
  role_actions: {
    consume: 'consume',
    produce: 'produce',
    functions: 'functions'
  },
  subscription_auth_mode: {
    none: 'None',
    prefix: 'Prefix'
  },
  backlog_policy: {
    consumer_backlog_eviction: 'consumer_backlog_eviction',
    producer_exception: 'producer_exception',
    producer_request_hold: 'producer_request_hold'
  },
  schema_bc: {
    full: 'Full',
    forward: 'Forward',
    backward: 'Backward',
    always: 'Always Compatible',
    auto_update_disabled: 'AutoUpdate Disabled',
    backward_transitive: 'Backward Transitive',
    forward_transitive: 'Forward Transitive',
    full_transitive: 'Full Transitive'
  },
  common: {
    dangerZone: 'Danger Zone',
    actions: 'Actions',
    clusterLabel: 'Cluster',
    namespacesLabel: 'Namespaces',
    regex: 'Regex',
    inMsg: 'In Rate',
    outMsg: 'Out Rate',
    inBytes: 'In Throughput',
    outBytes: 'Out Throughput',
    storageSize: 'Storage Size',
    enabled: 'Enabled',
    disabled: 'Disabled'
  },
  tenant: {
    label: 'Tenant',
    name: 'Tenant',
    searchTenant: 'Search Tenants',
    newTenant: 'New Tenant',
    deleteTenant: 'Delete Tenant',
    nameLabel: 'Tenant Name',
    adminRolesLabel: 'Admin Roles',
    allowedClustersLabel: 'Allowed Clusters',
    selectTenantMessage: 'Please select tenant',
    deleteTenantMessage: 'Are you sure you want to delete this tenant?',
    tenantInfo: 'Tenant Info',
    allowedClustersContent: 'List of clusters that this tenant is restricted on.',
    adminRolesContent: 'List of authenticated roles allowed to administrate this tenant.',
    permissions: 'Permissions',
    newRole: 'New Role',
    tenantIsRequired: 'Tenant Name is required',
    clusterIsRequired: 'Please select allowed clusters for a tenant',
    createTenantSuccessNotification: 'Successfully create a tenant',
    deleteTenantSuccessNotification: 'Successfully delete a tenant',
    roleAlreadyExists: 'Role already exists',
    updateRolesSuccessNotification: 'Successfully update roles for this tenant',
    updateClustersSuccessNotification: 'Successfully update allowed clusters for this tenant'
  },
  namespace: {
    label: 'Namespace',
    name: 'Namespace',
    namespaceNumber: 'Namespaces',
    newNamespace: 'New Namespace',
    deleteNamespace: 'Delete Namespace',
    inputNamespaceMessage: 'Please input namespace',
    newTopic: 'New Topic',
    searchTopics: 'Search Topics',
    deleteNamespaceMessage: 'Are you sure you want to delete this namespace?',
    namespaceNameIsRequired: 'Namespace name is required',
    createNsSuccessNotification: 'Successfully create a namespace',
    deleteNsSuccessNotification: 'Successfully delete the namespace',
    searchNamespaces: 'Search namespaces',
    policy: {
      label: 'Policy',
      name: 'Policy Name',
      cluster: 'Clusters',
      replicatedCluster: 'Replicated Clusters',
      replicatedClustersContent: 'List of replication clusters for this namespace.' +
        ' The messages of the topics in this namespace will be replicated between' +
        ' the configured replication clusters in an asynchronous way.',
      authorization: 'Authorization',
      authorizationContent: 'Following section is used for granting and revoking ' +
        'permissions to other client roles on this namespace.',
      selectRole: 'Please select role',
      deleteRole: 'Delete Role',
      addRole: 'Add Role',
      subscriptionAuthentication: 'Subscription Authentication',
      subscriptionAuthenticationMode: 'Subscription Authentication Mode',
      subscriptionAuthenticationModeContent: 'Configure the subscription authentication' +
        ' mode to limit the naming convention for subscriptions when authentication' +
        ' is enabled.',
      subscriptionAuthenticationModeOptions: 'Available options: "None", "Prefix".',
      subscriptionAuthenticationModeNone: 'None: every client role can use' +
        ' any allowed subscription name to connect.',
      subscriptionAuthenticaitonModePrefix: 'Prefix: the' +
        ' clients are allowed to use subscription names prefixed with their role names' +
        ' to subscribe.',
      subscriptionAuthenticaitonModePrefixExample: 'For example, if a client is authenticated as `example`, it can' +
        ' only use subscription name prefixed with `example` to subscribe. Other subscription' +
        ' names are disallowed.',
      storage: 'Storage',
      replicationFactor: 'Replication Factor',
      replicationFactorContent: 'Storage replication settings.',
      ensembleSizeDescription: ': number of bookies to use when creating a ledger.',
      writeQuorumSizeDescription: ': number of replicas to store for each message.',
      ackQuorumSizeDescription: ': number of responses to wait before claiming a message is guaranteed to be stored.',
      ensembleSize: 'Ensembel Size',
      inputEnsemble: 'Please input ensembel',
      writeQuorumSize: 'Write Quorum Size',
      inputWriteQuorumSize: 'Please input Write Quorum Size',
      readQuorumSize: 'Ack Quorum Size',
      inputReadQuorumSize: 'Please input Ack Quorum Size',
      markDeleteRate: 'Mark-Delete Rate',
      markDeleteRateContent: 'The rate limiter on how many mark-delete calls per second are allowed. ' +
        '0 to disable this rate limiter',
      inputDeleteMaxRate: 'Please input Delete Max Rate',
      encryptionRequire: 'Encryption Required',
      encryptionRequireContent: 'Enforce message encryption for a namespace.',
      deduplication: 'Deduplication',
      deduplicationContent: 'Enable or disable deduplication for a namespace.',
      backlog: 'Backlog',
      backlogQuotasLimit: 'Backlog Quota Size',
      backlogQuotasLimitContent: 'Max backlog quota is allowed for a namespace (in bytes)',
      inputBacklogQuotasLimit: 'Please input Backlog Quotas Limit',
      backlogRententionPolicy: 'Backlog Retention Policy',
      backlogRententionPolicyContent: 'Retention policy to enforce when the backlog quota is reached.',
      backlogRententionPolicyOptions: 'Valid options are:',
      producerRequestHoldDesc: 'producer_request_hold: policy which holds producer\'s sent requests until the resource becomes available (or holding times out).',
      producerExceptionDesc: 'producer_exception: policy which rejects producers\'s sent requests.',
      consumerEvictionDesc: 'consumer_backlog_eviction: policy which evicts the oldest messages from the slowest consumer\'s backlog.',
      inputBacklogRententionPolicyContent: 'Please select backlog rentention policy',
      schema: 'Schema',
      autoUpdateStrategy: 'AutoUpdate Strategy',
      autoUpdateStrategyContent: 'Strategy applied for producer auto-updating new registered schemas.',
      schemaCompatibilityCheckStrategyLink: 'Schema compatibility check strategy',
      inputAutoUpdateStrategy: 'Please select backlog autoUpdate strategy',
      schemaValidationEnforced: 'Schema Validation Enforced',
      schemaValidationEnforcedContent: 'Enforce schema validation for producers without schema.' +
        ' If disabled, producers without schema are disallowed to produce messages to topics with schema.',
      cleanupPolicy: 'Cleanup Policy',
      messageTTL: 'Message TTL (seconds)',
      messageTTLContent: 'Set message TTL in seconds. If the messages are not consumed by any consumers' +
        ' of a subscription, they are marked as `consumed` after the configured TTL period for that subscription.',
      inputMessageTTL: 'Please input Backlog Quotas Limit',
      retentionSize: 'Retention Size (bytes)',
      retentionSizeContent: 'The retention size. Only applied to the messages are acknowledged by all subscriptions.',
      inputRententionSize: 'Please input retention size',
      retentionTime: 'Retention Period (minutes)',
      retentionTimeContent: 'The retention period. Only applied to the messages are acknowledged by all subscriptions ',
      inputRetentionTime: 'Please input Retention Time',
      compactionThreshold: 'Compaction Threshold (bytes)',
      compactionThresholdContent: 'The compaction is automatically triggered when the storage size reaches the threshold.',
      inputCompactionThreshold: 'Please input compaction threshold',
      offloadThreshold: 'Offload Threshold (bytes)',
      offloadThresholdContent: 'Messages are automatically offloaded to the tiered storage when the data size of unoffloaded messages reaches the threshold.',
      inputOffloadThreshold: 'Please input Offload Threshold',
      offloadDeletionLag: 'Offload Deletion Lag (milliseconds)',
      offloadDeletionLagContent: 'Number of milliseconds to wait before deleting a ledger which has been offloaded from BookKeeper. A negative value denotes that deletion has been completelly disabled.',
      inputOffloadDeleteLag: 'Please input offload delete lag',
      throttling: 'Throttling',
      maxProducersPerTopic: 'Max Producers Per Topic',
      maxProducersPerTopicContent: 'Max number of producers allowed per topic.',
      inputMaxProducersPerTopic: 'Please input max Producers',
      maxConsumersPerTopic: 'Max Consumers Per Topic',
      maxConsumersPerTopicContent: 'Max number of consumers allowed per topic.',
      inputMaxConsumersForTopic: 'Please input max Consumers for topic',
      maxConsumerPerSubscription: 'Max Consumers Per Subscription',
      maxConsumerPerSubContent: 'Max number of consumers allowed per subscription.',
      inputMaxConsumersForSub: 'Please input max consumer for sub',
      dispatchRate: 'Dispatch Rate',
      dispatchRatePerTopic: 'Dispatch Rate Per Topic',
      dispatchRatePerTopicContent: 'Throttling dispatch rate on per-topic basis.',
      dispatchRatePerTopicBytes: 'Throughput (bytes/second)',
      inputDispatchRateBytes: 'Please input dispatch rate',
      dispatchRatePerTopicMessage: 'Rate (messages/second)',
      inputDispatchRatePerTopicMessage: 'Please input dispatch rate',
      dispatchRatePerTopicPeriod: 'Time Period (seconds)',
      inputDispatchPerTopicPerPeriod: 'Please input dispatch rate',
      dispatchRateForSub: 'Dispatch Rate Per Subscription',
      dispatchRatePerSubContent: 'Throttling dispatch rate on per-subscription basis.',
      inputDispatchRatePerSubBytes: 'Please input dispatch rate',
      dispatchRatePerSubBytes: 'Throughput (bytes/second)',
      dispatchRatePerSubMessage: 'Rate (message/second)',
      inputDispatchRatePerSubMessage: 'Please input dispatch rate',
      dispatchRatePerSubPeriod: 'Time Period (seconds)',
      inputDispatchRatePerSubPeriod: 'Please input dispatch rate',
      subscribeRatePerConsumer: 'Subscribe Rate Per Consumer',
      subscribeRatePerConsumerSub: 'Rate (subscribes/second)',
      inputSubscribeRate: 'Please input subscribe rate',
      subscribeRatePerConsumerContent: 'Limit how fast a consumer can attempt to subscribe to a topic.',
      subscribeRatePerConsumerPeriod: 'Time Period (seconds)',
      antiAffinity: 'Anti-Affinity',
      antiAffinityGroup: 'Anti-Affinity Group',
      antiAffinityGroupContent: 'Configure the anti-affinity group for this namespace.',
      inputAntiAffinityGroup: 'Please input Anti Affinity Group',
      roleAlreadyExists: 'This role already exists'
    },
    clearBacklog: 'Clear Backlog',
    bundle: {
      label: 'Bundle',
      name: 'Bundle Name',
      operation: 'Operation',
      split: 'Split',
      unload: 'Unload',
      bundleInfoContent: 'Namespace bundles are the assignment and load-balancing units within Pulsar.',
      bundleInfoLink: 'See - Pulsar load balance mechanism'
    },
    notification: {
      updatePersistenceSuccess: 'Successfully update persistence settings for this namespace!',
      updateBacklogQuotaSuccess: 'Successfully update backlog quota settings for this namespace!',
      splitBundleSuccess: 'Successfully split a namespace bundle for this namespace!',
      unloadAllBundlesSuccess: 'Successfully unload all the namespace bundles for this namespace!',
      unloadBundleSuccess: 'Successfully unload a namespace bundle for this namespace!',
      clearBacklogSuccess: 'Successfully clear backlog for this namespace!',
      clearBundleBacklogSuccess: 'Successfully clear backlog of a namespace bundle for this namespace!',
      updateReplicatedClustersSuccess: 'Successfully update replicated clusters for this namespace!',
      updateSubscriptionAuthModeSuccess: 'Successfully update subscription authentication mode for this namespace!',
      addRoleSuccess: 'Successfully add a role for this namespace!',
      addRoleActionsSuccess: 'Successfully add a role action for this namespace!',
      removeRoleSuccess: 'Successfully remove a role from this namespace!',
      updateSchemaAutoUpdateStrategySuccess: 'Successfully change schema auto-update strategy for this namespace!',
      enableSchemaValidationEnforcedSuccess: 'Successfully enable schema validation for this namespace!',
      disableSchemaValidationEnforcedSuccess: 'Successfully disable schema validation for this namespace!',
      updateMessageTTLSuccess: 'Successfully set message TTL for this namespace!',
      updateRetentionSuccess: 'Successfully set message retention policy for this namespace!',
      updateCompactionThresholdSuccess: 'Successfully set compaction threshold for this namespace!',
      updateOffloadThresholdSuccess: 'Successfully set offload threshold for this namespace!',
      updateOffloadDeletionLagSuccess: 'Successfully update offload deletion lag for this namespace!',
      setMaxProducersSuccess: 'Successfully set max producers per topic for this namespace!',
      setMaxConsumersSuccess: 'Successfully set max consumers per topic for this namespace!',
      setMaxConsumersPerSubscriptionSuccess: 'Successfully set max consumers per subscription for this namespace!',
      setDispatchRateSuccess: 'Successfully set max dispatch rate per topic for this namespace!',
      setDispatchRatePerSubscriptionSuccess: 'Successfully set max dispatch rate per subscription for this namespace!',
      setSubscribeRateSuccess: 'Successfully set max subscribe rate per topic for this namespace!',
      setAntiAffinityGroupSuccess: 'Successfully set anti-affinity group for this namespace!',
      enableEncryptionSuccess: 'Successfully enable message encryption for this namespace!',
      disableEncryptionSuccess: 'Successfully disable message encryption for this namespace!',
      enableDeduplicationSuccess: 'Successfully enable message de-duplication for this namespace!',
      disableDeduplicationSuccess: 'Successfully disable message de-duplication for this namespace!'
    }
  },
  topic: {
    label: 'Topic',
    name: 'Topic',
    topicName: 'Topic Name',
    topicNumber: 'Topics',
    newTopic: 'New Topic',
    deleteTopic: 'Delete Topic',
    delete: 'Delete',
    persistent: 'Persistent',
    nonPersistent: 'Non-persistent',
    partition: 'Partition',
    partitions: 'Partitions',
    partitionNumber: 'Partitions',
    topicDomain: 'Domain',
    addRole: 'Add Role',
    producer: {
      label: 'Producer',
      name: 'Producer Name',
      producers: 'Producers',
      producerId: 'Producer Id',
      producerName: 'Producer Name',
      producerNumber: 'Producers',
      avgMsgSize: 'Avg Msg Size',
      address: 'Address',
      since: 'Since'
    },
    subscription: {
      label: 'Subscription',
      name: 'Subscription Name',
      subscriptions: 'Subscriptions',
      type: 'Type',
      subscriptionNumber: 'Subscriptions',
      msgExpired: 'Msg Expired',
      backlog: 'Backlog',
      skip: 'SKIP',
      skipMessage: 'Messages',
      expire: 'EXPIRE',
      expireMessage: 'messages older than timestamp (in seconds)',
      expireTimePlaceholder: 'Expire Time for Messages',
      expireTimeRequired: 'Expire Time is required',
      clear: 'CLEAR',
      clearMessage: 'Clear Message',
      clearMessageConfirm: 'Do you confirm clear backlog?',
      reset: 'RESET',
      resetByTime: 'Reset by time',
      resetByTimeMessage: 'Reset by time older than timestamp (in minutes)',
      resetByTimeRequired: 'Reset Time is required',
      resetById: 'Reset By Message Id',
      messageId: 'Message ID',
      mins: 'Mins',
      storage: 'STORAGE',
      storageSize: 'Storage Size',
      entries: 'Entries',
      segments: 'Segments'
    },
    segment: {
      label: 'Segment',
      name: 'Segment Name',
      ledgerId: 'Ledger Id',
      entries: 'Entries',
      size: 'Size',
      status: 'Status',
      offload: 'Offload'
    },
    cursor: {
      label: 'Cursor',
      name: 'Cursor Name',
      cursors: 'Cursors',
      markDeletePosition: 'Mark Delete Position',
      readPosition: 'Read Position',
      waitingReadOp: 'Waiting Read Op',
      pendingReadOp: 'Pending Read Op',
      numberOfEntriesSinceFirstNotAckedMessage: 'Entries Since First Not AckedMessage'
    },
    policy: {
      label: 'policy',
      name: 'Policy Name',
      policies: 'Policies',
      authentication: 'Authorization',
      authorizationContent: 'Grant and revoke permissions to client roles on topics.'
    },
    consumer: {
      label: 'Consumer',
      name: 'Consumer Name',
      consumers: 'Consumers',
      avgMsgSize: 'Avg Msg Size',
      address: 'Address',
      since: 'Since'
    },
    notification: {
      createTopicSuccess: 'Successfully create a topic!',
      deleteTopicSuccess: 'Successfully delete the topic!',
      deletePartitionedTopicSuccess: 'Successfully delete the partitioned topic!',
      unloadTopicSuccess: 'Successfully unload the topic!',
      terminateTopicSuccess: 'Successfully terminate the topic!',
      startCompactionSuccess: 'Successfully start compacting the topic!',
      startOffloadSuccess: 'Successfully start offloading the topic!',
      expireMessageSuccess: 'Successfully expire messages the topic!'
    },
    info: 'INFO',
    column: 'column',
    data: 'data',
    terminate: 'Terminate',
    compactionName: 'COMPACTION',
    compaction: 'Compaction',
    offloadName: 'OFFLOAD',
    offload: 'Offload',
    status: 'STATUS',
    unload: 'Unload',
    deleteTopicMessage: 'Are you sure you want to delete this topic?',
    partitionedTopicName: 'Partitioned Topic Name',
    selectRoleMessage: 'Please Select Role',
    backlogOpeartion: 'Backlog Operation'
  },
  cluster: {
    label: 'Cluster',
    name: 'Cluster Name',
    addCluster: 'Add Cluster',
    updateCluster: 'Update Cluster',
    deleteCluster: 'Delete Cluster',
    searchClusters: 'Search Clusters',
    selectCluster: 'Please select cluster',
    serviceUrl: 'Service Url',
    selectClusterMessage: 'Please select clusters',
    webServiceUrlPrefix: 'Http Service Url',
    webServiceUrlTlsPrefix: 'Https Service Url',
    brokerServiceUrlPrefix: 'Broker Service Url',
    brokerServiceUrlTlsPrefix: 'Broker Service Url (TLS)',
    deleteClusterMessage: 'Are you sure you want to delete this cluster?',
    replicatedCluster: 'Replicated Clusters',
    addClusterSuccessNotification: 'Successfully add a cluster',
    deleteClusterSuccessNotification: 'Successfully delete a cluster',
    clusterNameIsRequired: 'Cluster name is required',
    serviceUrlIsRequired: 'Service URL is required',
    deleteClusterDialogCaption: 'Delete Cluster',
    updateClusterSuccessNotification: 'Successfully update a cluster'
  },
  broker: {
    label: 'Broker',
    name: 'Broker',
    brokerNumber: 'Brokers',
    ownedNamespaceNumber: 'Owned Namespaces',
    throughput: 'Throughput (bytes/s)',
    msgRate: 'Msg Rate (msgs/s)',
    placeholderSelectBroker: 'Please select brokers',
    brokerContent: 'The list of brokers belong to this failure domain.'
  },
  bookie: {
    label: 'Bookie',
    name: 'Name',
    state: 'State',
    storage: 'Storage'
  },
  // failure domain
  fd: {
    label: 'Failure Domain',
    failureDomainNumber: 'Failure Domains',
    createFdTitle: 'Add a New Failure Domain',
    name: 'Domain Name',
    brokerList: 'Broker List',
    selectBrokers: 'Please select brokers',
    searchFds: 'Search Failure Domains',
    newFd: 'New FailureDomain',
    updateFd: 'Update Failure Domain',
    deleteFd: 'Delete Failure Domain',
    deleteFdMessage: 'Are you sure you want to delete this failure domain?',
    domainNameIsRequired: 'Domain Name is required',
    deleteDomainDialogCaption: 'Delete Failure Domain',
    createFdSuccessNotification: 'Successfully create a failure domain',
    deleteFdSuccessNotification: 'Successfully delete a failure domain',
    updateFdSuccessNotification: 'Successfully update a failure domain'
  },
  // isolation policies
  ip: {
    label: 'Policy',
    heading: 'Namespace Isolation Policy',
    name: 'Policy Name',
    searchIps: 'Search Isolation Policies',
    selectIp: 'Select Isolation Policy',
    newIp: 'New Isolation Policy',
    nameLabel: 'Isolation Policy',
    numPBLabel: 'Primary Brokers',
    numSBLabel: 'Secondary Brokers',
    newIpName: 'Please input policy name',
    selectNsLabel: 'Select Namespaces',
    selectPbLabel: 'Select Brokers',
    selectSbLabel: 'Select Brokers',
    selectAfpPh: 'Please select auto failover policy',
    pbHeading: 'Primary Brokers',
    sbHeading: 'Secondary Brokers',
    afpHeading: 'Auto Failover Policy',
    ptHeading: 'Policy Type',
    brokerUsageThresholdLabel: 'Broker Usage Threshold',
    brokerUsageThresholdPh: 'Please input broker usage threshold',
    minimalAvailableBrokerLabel: 'Minimal Available Brokers',
    minimalAvailableBrokerPh: 'Please input minimalAvailableBroker',
    deletePolicyMessage: 'Are you sure you want to delete this policy?',
    deletePolicyDialogCaption: 'Delete Isolation Policy',
    deletePolicySuccessNotification: 'Successfully delete an isolation policy',
    policyNameCannotBeEmpty: 'Policy name cannot be empty',
    regexCannotBeEmpty: 'Namespace regex cannot be empty',
    nsRegexAlreadyExists: 'Namespace regex already exists',
    primaryBrokerRegexCannotBeEmpty: 'Primary broker regex cannot be empty',
    primaryBrokerRegexAlreadyExists: 'Primary broker regex already exists',
    secondaryBrokerRegexCannotBeEmpty: 'Secondary broker regex cannot be empty',
    secondaryBrokerRegexAlreadyExists: 'Secondary broker regex already exists',
    numLimitShouldGreaterThan0: 'Minimal available brokers should be greater than 0',
    usageThresholdShouldGreaterThan0: 'Broker usage threshold should be greater than 0',
    updatePolicySuccessNotification: 'Successfully update an ioslation policy',
    namespaceDesc: 'Regex expressions for the namespaces to apply this isolation policy.',
    primaryBrokerDesc: 'Regex expressions for the primary brokers of this isolation policy.',
    secondaryBrokerDesc: 'Regex expressions for the secondary brokers of this isolation policy.',
    policyTypeDesc: 'The policy to auto-failover the configured namespaces between primary brokers and secondary brokers.',
    brokerUsageThresholdDesc: 'The usage threshold that a broker is marked as unavailable for the auto-failover policy.',
    minimalAvailableBrokerDesc: 'The minimum number of available brokers to trigger auto failover.'
  },
  // environment
  env: {
    buttonNewEnv: 'New Environment',
    colHeadingEnv: 'Environment Name',
    colHeadingServiceUrl: 'Service URL',
    newEnvDialogCaption: 'New Environment',
    newEnvNamePlaceHolder: 'Please input environment name',
    newEnvNameLabel: 'Environment Name',
    newEnvServiceUrlPlaceHolder: 'Please input environment service url',
    newEnvServiceUrlLabel: 'Service URL',
    updateEnvDialogCaption: 'Update Environment',
    updateEnvNameLabel: 'Environment Name',
    updateEnvServiceUrlPlaceHolder: 'Please input environment service url',
    updateEnvServiceUrlLabel: 'Service URL',
    deleteEnvDialogCaption: 'Delete Environment',
    deleteEnvDialogText: 'Are you sure you want to delete this environment?',
    envNameIsRequired: 'Environment Name is required',
    serviceUrlIsRequired: 'Service URL is required',
    addEnvSuccessNotification: 'Successfully add an environment',
    deleteEnvSuccessNotification: 'Successfully delete an environment',
    updateEnvSuccessNotification: 'Successfully update an environment',
    manageEnvs: 'Manage Environments'
  },
  token: {
    buttonNewToken: 'New Token',
    colHeadingRole: 'Role',
    colHeadingToken: 'Token',
    colHeadingDesc: 'Description',
    newTokenRolePlaceholder: 'Please input role name',
    newTokenDialogCaption: 'New Token',
    newTokenDescPlaceholder: 'Please input description for role',
    newTokenRequiredMessage: 'Role is required',
    addTokenSuccessNotification: 'Successfully add a token for role',
    deleteTokenSuccessNotification: 'Successfully delete a token for role',
    updateTokenSucccessNotification: 'Successfully update a token for role'
  },
  user: {
    buttonNewUser: 'New a user',
    colUserName: 'User Name',
    colUserDesc: 'User Description',
    colUserEmail: 'User Email',
    colUserPhone: 'User Phone Number',
    colUserLocation: 'User Location',
    colUserCompany: 'User Company',
    colUserPassword: 'User Password',
    colUserPasswordRepeat: 'Repeat User Password',
    userNamePlaceHolder: 'Please input user name',
    userDescPlaceHolder: 'Please input user description',
    userEmailPlaceHolder: 'Please input user email',
    userPhonePlaceHolder: 'Please input user phone number',
    userLocationPlaceHolder: 'Please input user location',
    userCompanyPlaceHolder: 'Please input user company',
    userPasswordPlaceHolder: 'Please input user password',
    newUser: 'New a user',
    deleteUser: 'Delete a user',
    updateUser: 'Update a user',
    userNameIsRequired: 'The name can not is empty',
    userEmailIsRequired: 'The email can not is empty',
    userPasswordIsRequired: 'The password can not is empty',
    passwordNotification: 'The passwords do not match',
    creatUserNotification: 'Create a user success',
    deleteUserNotification: 'Delete a user success',
    updateUserNotification: 'Update a user success'
  },
  role: {
    roleAlreadyExists: 'Role already exists',
    buttonNewRole: 'New a Role',
    colRoleName: 'Role Name',
    colRoleDesc: 'Role Description',
    colResourceType: 'Resource Type',
    colResourceName: 'Resource Name',
    colResourceVerbs: 'Resource Verbs',
    colRoleSource: 'Role Source',
    colResource: 'Resource',
    roleNamePlaceHolder: 'Please input role name',
    roleDescPlaceHolder: 'Please input role description',
    resourceTypePlaceHolder: 'Please select resource type',
    resourcePlaceHolder: 'Please select resource',
    resourceVerbsPlaceHolder: 'Please select role verbs',
    resourceDescPlaceHolder: 'Please input role description',
    newRole: 'New a Role',
    deleteRole: 'Delete a Role',
    updateRole: 'Update a Role',
    roleNameIsRequired: 'The name can not is empty',
    creatRoleNotification: 'Create a role success',
    deleteRoleNotification: 'Delete a role success',
    updateRoleNotification: 'Update a role success'
  }
}
