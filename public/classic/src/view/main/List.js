/**
 * This view is an example list of people.
 */
Ext.define('CellarMaster.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'CellarMaster.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex:2 },
        { text: 'Password', dataIndex: 'password', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
