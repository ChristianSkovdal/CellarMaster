Ext.define('CellarMaster.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'CellarMaster.view.MainController',
        'CellarMaster.view.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    html: 'Hello, world!'
});
