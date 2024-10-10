//@ui5-bundle pdfdisplay/Component-preload.js
sap.ui.require.preload({
	"pdfdisplay/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("pdfdisplay.Component",{metadata:{manifest:"json"}})});
},
	"pdfdisplay/ext/controller/Display.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{display:function(e){s.show("Custom handler invoked.")}}});
},
	"pdfdisplay/ext/controller/PDF.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{PDFDisplay:function(s){e.show("Custom handler invoked.");this.showSideContent("GeneratedFacet1")}}});
},
	"pdfdisplay/ext/fragment/PDF.fragment.xml":'\n\n<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m"   xmlns:macros="sap.fe.macros"><VBox id="_IDGenVBox1" core:require="{ handler: \'pdfdisplay/ext/fragment/PDF\'}"><PDFViewer id="pdfViewer" source="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf" isTrustedSource="true" displayType="Embedded" visible="true" width="100%" height="600px"/></VBox></core:FragmentDefinition>\n\n\n\n',
	"pdfdisplay/ext/fragment/PDF.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/Fragment","sap/m/PDFViewer","sap/ui/layout/DynamicSideContent"],function(e,a,s,i,t){"use strict";return{}});
},
	"pdfdisplay/i18n/i18n.properties":'# This is the resource bundle for pdfdisplay\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=PDF Display\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,15\nflpTitle=PDF\n',
	"pdfdisplay/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"pdfdisplay","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.2","toolsId":"e0066842-ea0d-4d7e-aed5-fb3bd0c72e8d"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"pdfdisplay-display":{"semanticObject":"pdfdisplay","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"pdfdisplay.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"studList","target":"studList"},{"pattern":"stud({key}):?query:","name":"studObjectPage","target":"studObjectPage"}],"targets":{"studList":{"type":"Component","id":"studList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/stud","variantManagement":"Page","navigation":{"stud":{"detail":{"route":"studObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"studObjectPage":{"type":"Component","id":"studObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/stud","content":{"body":{"sections":{"GeneratedFacet1":{"sideContent":{"template":"pdfdisplay.ext.fragment.PDF","position":{"placement":"After","anchor":"GeneratedFacet1"},"title":"pdf","type":"XMLFragment"}},"PDF":{"template":"pdfdisplay.ext.fragment.PDF","position":{"placement":"After","anchor":"GeneratedFacet1"},"title":"Student"}}},"header":{"actions":{"1":{"press":"pdfdisplay.ext.controller.PDF.PDFDisplay","visible":true,"enabled":true,"text":"PDF"}}},"footer":{"actions":{"2":{"press":"pdfdisplay.ext.controller.Display.display","visible":true,"enabled":true,"text":"Display"}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
