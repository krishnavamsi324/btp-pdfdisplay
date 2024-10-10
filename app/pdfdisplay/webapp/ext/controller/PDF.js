sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        PDFDisplay: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            this.showSideContent("GeneratedFacet1");
        }
    };
});
