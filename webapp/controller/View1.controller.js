sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("uitable.controller.View1", {
            onInit: function () {


                var that = this;

                var oModel = that.getOwnerComponent().getModel("Data1");

                oModel.read("/Invoices", {
                    success: function (odata) {


                        var oModel1 = new JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "oModel1");
                        MessageBox.success(oModel1);

                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });
            },
            onPress: function (oEvent) {
                var key = oEvent.oSource.mProperties.text;
                // var key = oEvent.oSource.mAggregations.cells[0].mProperties.text;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2", { KeyID: key });
            },

            // onPress:function(oEvent){
            //     var key = oEvent.oSource.mAggregations.cells[6].mProperties.text;
            //     var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //     loRouter.navTo("View2", { KeyID: key });
            // },

            onSearch: function (evt) {
               // var sQuery = evt.getParameter("query");
          //  var sQuery= evt.mParameters.newValue;
           var that = this;
           var oTable = that.getView().byId("idProducts");
           //  var oBinding = oTable.getBinding("items");
             var oBinding = oTable.getBinding("rows");
               
             if (evt.getId() == "liveChange") {
                  var  sQuery = evt.mParameters.newValue;
                }

                var that = this;
                if (sQuery) {
                    var oFilter = new sap.ui.model.Filter('ShipName', 'EQ', sQuery);
                    var oFilter1 = new sap.ui.model.Filter('ShipCity', 'EQ', sQuery);
                    var oFilter2 = new sap.ui.model.Filter('ShipPostalCode', 'EQ', sQuery);
                    var oFilter3 = new sap.ui.model.Filter('ShipCountry', 'EQ', sQuery);
                    var oFilter4 = new sap.ui.model.Filter('CustomerID', 'EQ', sQuery);
                    var oFilter5 = new sap.ui.model.Filter('CustomerName', 'EQ', sQuery);
                    var oFilter6 = new sap.ui.model.Filter('Address', 'EQ', sQuery);
                    var oFilter7 = new sap.ui.model.Filter('City', 'EQ', sQuery);
                    var oFilter9 = new sap.ui.model.Filter('Region', 'EQ', sQuery);
                    var oFilter10 = new sap.ui.model.Filter('PostalCode', 'EQ', sQuery);
                    var oFilter11 = new sap.ui.model.Filter('Country', 'EQ', sQuery);
                    var oFilter12 = new sap.ui.model.Filter('Salesperson', 'EQ', sQuery);
                    var oFilter13 = new sap.ui.model.Filter('OrderID', 'EQ', sQuery);
                    var oFilter14 = new sap.ui.model.Filter('OrderDate', 'EQ', sQuery);
                    var oFilter15 = new sap.ui.model.Filter('ORequiredDate', 'EQ', sQuery);
                    var oFilter16 = new sap.ui.model.Filter('ShippedDate', 'EQ', sQuery);

                    var ofilters = new sap.ui.model.Filter([oFilter, oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6, oFilter7,
                        oFilter9, oFilter10, oFilter11, oFilter12, oFilter13, oFilter14, oFilter15, oFilter16]);
                }

                
                oBinding.filter(ofilters);


            },
            onNavIndicatorsToggle: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            }

        });
    });