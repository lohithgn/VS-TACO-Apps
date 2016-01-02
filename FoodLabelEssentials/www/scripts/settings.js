(function (global) {

    var app = global.APP = global.APP || {};

    app.Settings = {
        sessionId : null,
        apiKey: '<YOUR API KEY>',
        views: {
            home: "views/home/home.html",
            search: "views/search/search.html",
            ingredients:"views/ingredients/ingredients.html"
        }
    }
})(window);