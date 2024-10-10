sap.ui.define(
	[
		"sap/ui/core/mvc/Controller"
	],
	function (BaseController) {
		"use strict";

		return BaseController.extend("pdfdisplay.workflowuimodule.controller.App", {
			// routing: {
			onBeforeRendering: async function (oEvent) {
				debugger
				// var baseUrl = oEvent.oSource.getModel().getServiceUrl();
				// var oItem = oEvent.getParameter("item"); 
				// var sFileId = oItem.getBindingContext().getProperty("ID"); 
				// // var sUrl = `/odata/v4/my/Files(ID=${sFileId},IsActiveEntity=false)`;
				// var sUrl = baseUrl+`Files(ID=${sFileId},IsActiveEntity=true)`;
				var Idvalue = this.oView.mAggregations.content[0].mAggregations.pages[0].mAggregations.content[0]._aElements[4].mProperties.value;
				console.log(Idvalue);
				var sUrl = `https://6f55ccb0trial-dev-task2-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/Files?$filter=(LecturerId eq 'L45')`;
				$.ajax({
					url: sUrl,
					method: "GET",
					contentType: "application/json",
					success: function (data) {
						sap.m.MessageToast.show("Data retrieved successfully");
						console.log("Data retrieved:", data.value);
						var oUploadSet = this.byId("uploadSet");
						data.value.forEach(function (file) {
							var oUploadSetItem = new sap.m.upload.UploadSetItem({
								fileName: file.fileName,
								mediaType: file.mediaType,
								url: "https://6f55ccb0trial-dev-task2-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/" + file.url,
								visibleEdit: false,
								visibleRemove: false
							});
							oUploadSetItem.addAttribute(new sap.m.ObjectAttribute({
								title: "Uploaded By",
								text: file.createdBy
							}));
							oUploadSetItem.addAttribute(new sap.m.ObjectAttribute({
								title: "Uploaded on",
								text: file.createdAt
							}));
							oUploadSetItem.addAttribute(new sap.m.ObjectAttribute({
								title: "File Size",
								text: file.size
							}));
							oUploadSet.addItem(oUploadSetItem);
						});
					}.bind(this),
					error: function (xhr, status, error) {
						sap.m.MessageToast.show("Error retrieving data: " + (xhr.responseText || error));
						console.log("Error retrieving data:", status, error, xhr.responseText);
					}
				});
				// }
			},
			onInit() {
				debugger
			},

		});
	}
);
