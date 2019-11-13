Ext.define('CellarMaster.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login',

    requires: [
        'Ext.MessageBox',
        'CellarMaster.view.MainController',
        'CellarMaster.view.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
    },

    items: [
        {
            xtype: 'panel',
            title: 'Login',
            shadow: true,
            width: 300,

            items: [
                {
                    xtype: 'textfield',
                    label: 'Name',
                    margin: 10,
                    reference: 'name'
                },
                {
                    xtype: 'textfield',
                    label: 'Password',
                    inputType: 'password',
                    margin: 10,
                    reference: 'password'
                },
                {
                    xtype: 'toolbar',
                    docking: 'bottom',
                    shadow: false,
                    items: [
                        '->',
                        {
                            width: 100,
                            xtype: 'button',
                            text: 'Login',
                            handler: 'login'
                        },
                        '->'
                    ]
                }
            ]
        }
    ]
});
