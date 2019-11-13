Ext.application({
    name: 'CellarMaster',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'CellarMaster.view.Main'
    ],

    mainView: 'CellarMaster.view.Main'
});
