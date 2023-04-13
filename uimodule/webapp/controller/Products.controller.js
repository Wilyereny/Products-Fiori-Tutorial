sap.ui.define(["tutorial/products/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("tutorial.products.controller.Products", {

        handleListItemPress: function (oEvent) {
            // eslint-disable-next-line no-var
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // eslint-disable-next-line no-var
            var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
            oRouter.navTo("ProductDetail", {
                productId: selectedProductId
        });
        }
    });
});
