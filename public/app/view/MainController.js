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
        debugger;
        this.fireEvent('initui');
    },

    initMain() {
        debugger;
    }
});
