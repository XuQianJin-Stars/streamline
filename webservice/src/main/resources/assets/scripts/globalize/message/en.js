/**
 * Never Delete any key without seraching it in all View and Template files
 */
(function (window, undefined) {
  var Globalize;
  require(['globalize'], function (globalize) {
    Globalize = globalize;
    Globalize.addCultureInfo("en", {
      messages: {
        // Form labels, Table headers etc
        lbl: {
          'deviceTypeId': 'Device Type Id',
          'version': 'Version',
          'deviceConfig': 'Device Config',
          'parserClassName': 'Parser Class Name',
          'parserId': 'Parser Id',
          'name': 'Name',
          'parserVersion': 'Parser Version',
          'jarLocation': 'Jar Location',
          'nimbusHostPort': 'Nimbus Host:Port',
          'kafkaBrokerHost': 'Kafka Broker Host',
          'parserJarLocation': 'Parser Jar Location',
          'parserName': 'Parser Name',
          'className': 'Class Name',
          'parserJar': 'Parser Jar',
          'close': 'Close',
          'add': 'Add',
          'jarStoragePath': 'Jar Location',
          'deviceName': 'Device Name',
          'description': 'Description',
          'tags': 'Tags',
          'deviceId': 'Device ID',
          'deviceVersion': 'Device Version',
          'deviceType': 'Device Type',
          'type': 'Type',
          'datasourceName': 'Datasource Name',
          'actions': 'Actions',
          'dataFeedName': 'Data Feed Name',
          'endpoint': 'End Point',
          'clusterName': 'Cluster Name',
          'hosts': 'Hosts',
          'port': 'Port',
          'devices': 'Devices',
          'selectDevices': 'Select Devices',
          'cancel': 'Cancel',
          'feedName': 'Feed Name',
          'topologyName': 'Topology Name',
          'state': 'State',
          'lastUpdatedOn': 'Last Updated On',
          'selectProcessor': 'Select Processor',
          'selectRule': 'Select Rule',
          'fsURL': 'fs URL',
          'path': 'Path',
          'action': 'Action',
          'formula': 'Formula',
          'rootDir': 'root dir',
          'table': 'table',
          'columnFamily': 'column family',
          'rowKey': 'row key',
          'feedType': 'Feed Type',
          'sinkName': 'Sink Name',
          'save': 'Save'
        },
        btn: {
          'first': 'First',
          'last': 'Last',
          'previous': 'Previous',
          'next': 'Next',
        },
        // h1, h2, h3, fieldset, title
        h: {
          'addNewParser': 'Add New Parser',
          'addNewDevice': 'Add New Device',
          'addNewDatasource': 'Add New Datasource',
          'deviceInformation': 'Device Information',
          'parserInformation': 'Parser Information'
        },
        msg: {
          'noDeviceFound': 'No Device(s) Found',
          'noParserFound': 'No Parser(s) Found',
          'noDatasourceFound': 'No Datasource(s) Found',
          'noClusterFound': 'No Cluster(s) Found',
          'noTopologyFound': 'No Topology Found'
        },
        plcHldr: {},
        dialogMsg: {
          'newParserAddedSuccessfully': 'New parser added successfully',
          'parserDeletedSuccessfully': 'Parser deleted successfully',
          'newDatasourceAddedSuccessfully': 'New datasource added successfully',
          'datasourceUpdatedSuccessfully': 'Datasource updated successfully',
          'dataSourceDeletedSuccessfully': 'Datasource deleted successfully',
          'newDataFeedAddedSuccessfully': 'New data feed added successfully',
          'dataFeedUpdatedSuccessfully': 'Data feed updated successfully',
          'dataFeedDeletedSuccessfully': 'Data feed deleted successfully',
          'newClusterAddedSuccessfully': 'Cluster added successfully',
          'clusterUpdatedSuccessfully': 'Cluster updated successfully',
          'clusterDeletedSuccessfully': 'Cluster deleted successfully',
          'newComponentAddedSuccessfully': 'Component added successfully',
          'componentUpdatedSuccessfully': 'Component updated successfully',
          'componentDeletedSuccessfully': 'Component deleted successfully',
          'topologyDeletedSuccessfully': 'Topology deleted successfully'
        },
        validationMessages: {},
        // Server Messages
        serverMsg: {}
      }
    });
  });
}(this));
