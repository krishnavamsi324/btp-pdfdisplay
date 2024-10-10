sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        display: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
