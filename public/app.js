/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CellarMaster.Application',

    name: 'CellarMaster',

    requires: [
        // This will automatically load all classes in the CellarMaster namespace
        // so that application classes do not need to require each other.
        'CellarMaster.*'
    ],

    // The name of the initial view to create.
    mainView: 'CellarMaster.view.main.Main'
});
