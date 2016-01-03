(function (global) {

    var app = global.APP = global.APP || {};

    var sessionUrl = 'http://api.foodessentials.com/createsession';
    
    var searchUrl = 'http://api.foodessentials.com/searchprods';
    
    var ingredientsUrl = 'http://api.foodessentials.com/label';

    var sessionData = {
        uid: 'demoUID_01',
        devid: 'demoDev_01',
        appid:'demoApp_01',
        f: 'json',
        api_key:app.Settings.apiKey
    };
    
    app.FEService = function () {
        function createSession() {
            var promise = new Promise(function (resolve, reject) {
                var ds = new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: sessionUrl,
                            data: {
                                uid: 'demoUID_01',
                                devid: 'demoDev_01',
                                appid: 'demoApp_01',
                                f: 'json',
                                api_key: app.Settings.apiKey
                            }
                        }
                    },
                    schema: {
                        parse: function (response) {
                            return [response];
                        }
                    },
                    change: function () {
                        var data = this.data()[0];
                        console.log(app.Settings.sessionId);
                        app.Settings.sessionId = data.session_id
                        console.log(app.Settings.sessionId);
                        resolve();
                    },
                    error: function (err) {
                        reject(err)
                    }
                })
                ds.read();
                //$.ajax({
                //    url: sessionUrl + '?' + jQuery.param(sessionData) + '&c=?',
                //    jsonp: 'c',
                //    dataType: 'jsonp',
                //    success: function (data) {
                //        console.log(app.Settings.sessionId);
                //        app.Settings.sessionId = data.session_id
                //        console.log(app.Settings.sessionId);
                //        resolve();
                //    },
                //    timeout: 5000,
                //    error: function (x, t, r) {
                //        reject();
                //    }
                //});
            });
            return promise;
        }
        function search() {
            return new kendo.data.DataSource({
                transport: {
                    read: {
                        url: searchUrl,
                        data: function () {
                            return {
                                q: app.SearchViewModel.get('searchText'),
                                sid: app.Settings.sessionId,
                                f: 'json',
                                n: 50,
                                s: 0,
                                api_key: app.Settings.apiKey
                            }
                        }
                    }
                },
                schema: {
                    data: 'productsArray'
                }
            })
        }

        function getIngredients(prodUpc) {
            return new Promise(function (resolve, reject) {
                var ds = new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: ingredientsUrl,
                            data: function () {
                                return {
                                    u:prodUpc,
                                    sid: app.Settings.sessionId,
                                    appid: 'demoApp_01',
                                    f: 'json',
                                    api_key: app.Settings.apiKey
                                }
                            }
                        }
                    },
                    change: function (response) {
                        var data = this.data();
                        resolve(data[0]);
                    },
                    schema: {
                        parse: function (response) {
                            return [response];
                        }
                    }
                })
                ds.read();
            })
        }

        return {
            login: createSession,
            search: search,
            ingredients: getIngredients
        }
    }();

})(window);