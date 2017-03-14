jQuery.sap.declare("list.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("list.Component", {
	metadata: {
		"manifest": "json"
	}
});