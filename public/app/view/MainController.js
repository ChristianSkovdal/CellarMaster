Ext.define('CellarMaster.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
            'main': {
                initui: 'initMain'
            },
            // '#foo': {
            //     bar: 'onFooBar'
            // }
        },
        component: {
            'main': {
                initialize: 'onInit'
            }
        },
        // store: {
        //     '#qux': {
        //         load: 'onQuxLoad'
        //     }
        // }
    },

    onInit() {
        //debugger;
        //this.fireEvent('initui');
        Ext.Ajax.request({
            url: 'http://localhost:3000/users',
            method: 'GET',
            timeout: 10000,
            // params:
            // {
            //     id: 1 // loads student whose Id is 1
            // },
            // headers:
            // {
            //     'Content-Type': 'application/json'
            // },
            success: function (response) {
                debugger;
            },
            failure: function (response) {
                debugger;
                Ext.Msg.alert('Status', 'Request Failed.');

            }
        });


    },

    initMain() {
        //debugger;
    }
});
