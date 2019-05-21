sap.ui.define([
	"com/uniorg/cf/mongodb/example/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.uniorg.cf.mongodb.example.controller.info.Information", {
		onInit: function(){
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			this._loadInfoData();
		},

		_loadInfoData: function(){
			this.getView().getModel().loadData("/api/info");
		}
	});
});