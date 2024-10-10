sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
            console.log('Entered');
            var oView = this.getView();
            var oPdfViewer = oView.byId("pdfViewer");
            var oButton = oView.byId("toggleButton");
            var bIsVisible = oPdfViewer.getVisible();
            oPdfViewer.setVisible(!bIsVisible);
            if (bIsVisible) {
                oButton.setText("Show PDF");
            } else {
                oButton.setText("Hide PDF");
            }
        }
    };
});
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     // "sap/ui/core/HTML",
//     "sap/m/MessageToast",
//     // "sap/ui/core/BusyIndicator",
//     "sap/ui/core/Fragment",
//     "sap/m/PDFViewer",
//     "sap/ui/layout/DynamicSideContent"
// ], function (Controller, MessageToast, Fragment,PDFViewer,DynamicSideContent) {
//     "use strict";

//     return {
//         onTogglePdfVisibility: function (oEvent) {
//             debugger
//             console.log('Entered');
//             var oView = this.getView();
//             var oPdfViewer = oView.byId("pdfViewer");
//             var oButton = oView.byId("toggleButton");
//             var bIsVisible = oPdfViewer.getVisible();
//             oPdfViewer.setVisible(!bIsVisible);
//             if (bIsVisible) {
//                 oButton.setText("Show PDF");
//             } else {
//                 oButton.setText("Hide PDF");
//             }
//         }
//         // onPress: function (oEvent) {
//         //     debugger
//         //     var sPdfUrl = "https://ui5.sap.com/sdk/test-resources/sap/m/demokit/sample/PDFViewerMultiple/sample.pdf";

//         //     var oSideContent = this.byId("DynamicSideContent");

//         //     // Access the PDFViewer control by ID
//         //     var oPdfViewer = this.byId("pdfViewer");

//         //     if (oPdfViewer) {
//         //         // Toggle the visibility of the PDF Viewer
//         //         var bVisible = oPdfViewer.getVisible();
//         //         oPdfViewer.setVisible(!bVisible);
//         //         // this.showSideContent("AccountOpenDetails");

//         //         if (!bVisible) {
//         //             // Set the source if the viewer is being made visible
//         //             oPdfViewer.setSource(sPdfUrl);
                    
//         //             oSideContent.setShowSideContent(true);
//         //         } else {
//         //             oSideContent.setShowSideContent(false);
//         //         }
//         //     } else {
//         //         MessageToast.show("PDF Viewer not found.");
//         //     }
//         // }
//     };
// });