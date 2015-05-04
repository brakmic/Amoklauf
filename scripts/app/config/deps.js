//the App starts here and we use AmpersandJS App-package

window.$           = window.jQuery = require('jquery');
window.Bootstrap   = require('bootstrap');
window.RiotControl = require('riotcontrol');
require('../../../styles/app/default-styles.css');
var app            = require('ampersand-app');
var Router         = require('../routing/client/amp-router.js');
var cuid           = require('cuid');
var moment         = require('moment');
var UserModel      = require('../models/user-model');

module.exports = (function() {
    app.extend({
        init: function() {
            console.log('Initializing the global App-Singleton.');
            app.Id        = cuid();
            app.name      = 'Amoklauf';
            app.timeStamp = moment().format('L');
            app.version   = '0.0.1';
            app.currentPage = {};
            app.user = new UserModel();
            app.network = {
                router: null,
                basePath: '/'
            };
            app.services = {
                login: {
                    url: 'http://jsonplaceholder.typicode.com/posts',
                    method: 'POST',
                    contentType: 'application/json;charset=utf-8'
                },
                messaging: {
                    url: 'http://jsonplaceholder.typicode.com/posts',
                    method: 'POST',
                    contentType: 'application/json;charset=utf-8'
                }
            };
            app.control   = {};
            app.libraries = {};
            //helper function for easy navigating between pages (taken from
            //AmpersandJS docs)
            app.navigate = function(page) {
                let url = (page.charAt(0) === '/') ? page.slice(1) : page;
                if (url.indexOf('/') !== -1) {
                    url = url.match(/\/(.*?)$/)[1];
                }
                this.network.router.history.navigate(url, {trigger: true});
            };
        }
    });
    app.init();
    app.network.router = new Router();
    window.app = app;
    console.log(`Running amok v${app.version}`);
}());
