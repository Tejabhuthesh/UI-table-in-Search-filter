sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageBox"
    ],
    function (Controller, JSONModel, MessageBox) {
        "use strict";


        return Controller.extend("uitable.controller.View2", {
            onInit() {
                var that = this;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                oRouter.getRoute("View2").attachPatternMatched(that.onRouteMatch, that);




            }, onNavBack: function () {
                history.go(-1);

            },
            onRouteMatch: function (oEvent) {
                var that = this;
                var KeyID2 = oEvent.mParameters.arguments.KeyID;
                var oModel = that.getOwnerComponent().getModel("Data1");

                oModel.read("/Customers", {
                    success: function (odata) {


                        var oModel1 = new JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1);
                        // MessageBox.success(oModel1);



                        var key2 = oModel1.oData.results;

                        var data = [];

                        for (var i = 0; i < key2.length; i++) {
                            if (KeyID2 == key2[i].CustomerID) {
                                data.push(key2[i]);
                                var oModel22 = new JSONModel(data);
                               //oModel22.setData(data);
                                that.getView().setModel(oModel22,"Data2");

                              
                            }
                        }
                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });
            }

        });
    });