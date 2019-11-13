Ext.application({
    name: 'CellarMaster',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'CellarMaster.view.Login'
    ],

    //mainView: 'CellarMaster.view.Main'

    launch() {
        let me = this;

        Ext.Viewport.add({
            xtype: 'main'
        });
    }
});
