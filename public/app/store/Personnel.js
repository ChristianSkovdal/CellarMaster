Ext.define('CellarMaster.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'CellarMaster.model.Personnel',

    autoLoad:true,
    proxy: {
        type: 'rest',
        url : '/users'
    }

    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }
});
