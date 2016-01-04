(function (global) {

    var app = global.APP = global.APP || {};
    var fetched = {};
    app.SearchViewModel = kendo.observable({
        searchText: null,
        searchResults: app.FEService.search(),
        show: function () {
            var searchProd = this.params.q;
            app.kMobile.showLoading();
            this.model.set('searchText', searchProd);
            if (!fetched[searchProd]) {
                fetched[searchProd] = true;
                this.model.get("searchResults").read().then(function ()
                {
                    app.kMobile.hideLoading()
                }, function () {
                    app.kMobile.hideLoading()
                })
            }
            else {
                this.model.get("searchResults").fetch().then(function () {
                    app.kMobile.hideLoading();
                });
            }
        }
    })

})(window);