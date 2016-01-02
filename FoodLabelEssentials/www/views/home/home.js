(function (global) {

    var app = global.APP = global.APP || {};

    app.HomeViewModel = kendo.observable({
        searchText: null,
        show: function () {
            if (app.Settings.sessionId === null) {
                app.kMobile.showLoading();
                app.FEService.login().then(function () {
                    app.kMobile.hideLoading();
                }, function () {
                    app.kMobile.hideLoading();
                    alert("Cannot connect to server")
                })
            }
        },
        search: function () {
            app.kMobile.navigate(app.Settings.views.search + "?q=" + this.get("searchText"));
        }
    })

})(window);