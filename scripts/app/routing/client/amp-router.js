//Client-router basend on AmpersandJS router package
let _              = require('underscore');
let app            = require('ampersand-app');
let Router         = require('ampersand-router');
let BasePage       = require('../../ui/pages/base-page');
let HomePage       = require('../../ui/pages/home-page');
let AboutPage      = require('../../ui/pages/about-page');
let ContactPage    = require('../../ui/pages/contact-page');
let LoginPage      = require('../../ui/pages/login-page');
let MoviesPage     = require('../../ui/pages/movies-page');

let AppRouter = Router.extend({
    initialize: function() {
    },
    routes: {
        ''          : 'home',
        'home'      : 'home',
        'about'     : 'about',
        'contact'   : 'contact',
        'movies'    : 'movies',
        'login'     : 'login',
        '(*path)'   : 'catchAll'

    },
    home: function() {
        if (!app.user.loggedOn) {
            app.navigate('/login', {trigger: false});
        }else {
            let page = new HomePage();
            this.trigger('page', page);
            page.initUI();
        }
    },
    about: function() {
        if (!app.user.loggedOn) {
            app.navigate('/login', {trigger: false});
        }else {
            let page = new AboutPage();
            this.trigger('page', page);
        }
    },
    contact: function() {
        if (!app.user.loggedOn) {
            app.navigate('/login', {trigger: false});
        }else {
            let page = new ContactPage();
            this.trigger('page', page);
            page.initUI();
        }
    },
    movies: function() {
        if (!app.user.loggedOn) {
            app.navigate('/login', {trigger: false});
        }else {
            let page = new MoviesPage();
            this.trigger('page', page);
            page.initUI();
        }
    },
    login: function() {
        let page = new LoginPage();
        this.trigger('page', page);
    },
    catchAll: function() {
        app.navigate('/home', {replace: true});
    }
});

module.exports = AppRouter;
