IonicPush = {
    /**
     * @description Configure IonicPush package
     * @param {String} app_id ionic app id
     * @param {String} app_secret ionic app secret
     **/
    config: function(app_id, app_secret) {
        this.app_id = app_id;
        this.app_secret = app_secret;
        this._createHeaders();
    },

    /**
     * @description Send a new push notification to ionic
     * @param {Object} params ionic push object
     **/
    send: function(params) {
        var options = {
            headers: this.headers,
            data: params
        };
        return HTTP.call('POST', 'https://push.ionic.io/api/v1/push', options);
    },

    /**
     * @description Check the status of a queued push notification
     * @param {String} message_id ionic message id
     **/
    checkPushStatus: function(message_id) {
        var options = {
            headers: this.headers
        };
        return HTTP.call('GET', 'https://push.ionic.io/api/v1/status/' + message_id, options);
    },

    _createHeaders: function() {
        this.headers =  {
            'Authorization': 'Basic ' + new Buffer(this.app_secret + ':').toString('base64'),
            'Content-Type': 'application/json',
            'X-Ionic-Application-Id': this.app_id
        };
    }
};
