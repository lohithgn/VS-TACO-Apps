(function (global) {

    var app = global.app = global.app || {};

    var sessionUrl = 'http://api.foodessentials.com/createsession';
    var apiData = {
        uid: 'demoUID_01',
        devid: 'demoDev_01',
        appid:'demoApp_01',
        f: 'json',
        c:'?',
        api_key:app.Settings.apiKey
    };

    app.FEService = function () {
        function sessionCreate() {
            var promise = new Promise(function (resolve, reject) {
                alert(jQuery.param(apiData));
                $.ajax({
                    url: url,
                    jsonp: 'c',
                    dataType: 'jsonp',
                    success: function (data) {
                        console.log(data)
                        app.Settings.sessionId = data.session_id
                        resolve();
                    },
                    timeout: 5000,
                    error: function (x, t, r) {
                        reject();
                    }
                });
            });
            return promise;
        }

        return {
            login:sessionCreate
        }
    }();

})(window);