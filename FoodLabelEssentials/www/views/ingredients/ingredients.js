(function (global) {

    var app = global.APP = global.APP || {};

    app.IngredientsViewModel = kendo.observable({
        prodName: null,
        ingredients: null,
        show: function () {
            this.model.set("prodName", 'Product Name: Loading...');
            this.model.set("ingredients", 'Ingredients: Loading...');
            app.kMobile.showLoading();
            app.FEService.ingredients(this.params.upc).then(function (prod) {
                this.model.set("prodName", prod.product_name);
                this.model.set("ingredients", prod.ingredients);
                app.kMobile.hideLoading();
            }.bind(this), function () {
                app.kMobile.hideLoading();
                alert('Error getting ingredients...');
            });
        }
    })
})(window);