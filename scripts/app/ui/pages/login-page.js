let app          = require('ampersand-app');
let BasePage     = require('./base-page');
let template     = require('../templates/login-page.html');
let UserModel    = require('../../models/user-model');
let LoginService = require('../../services/login-service');
let LoginForm    = require('../forms/login-form');

module.exports = BasePage.extend({
    pageTitle: 'Login',
    template: template,
    bindings: {
        'model.username': {
            type: 'attribute',
            name: 'value',
            hook: 'username'
        },
        'model.password': {
            type: 'attribute',
            name: 'value',
            hook: 'password'
        }
    },
    events: {
        'change [data-hook=username]' : 'userNameChanged',
        'change [data-hook=password]' : 'passwordChanged',
    },
    userNameChanged: function(e) {
        this.model.username = e.target.value;
        console.log('Username changed > ' + this.model.username);
    },
    passwordChanged: function(e) {
        this.model.password = e.target.value;
        console.log('Password changed > ' + this.model.password);
    },
    subviews: {
        form: {
            hook: 'login-form',
            prepareView: function(el) {
                let self = this;
                console.log('Preparing subview for login');
                return new LoginForm({
                            el: self.el,
                            model: self.model,
                            submitCallback: function(data) {
                                self.loginService.check(data.username, data.password)
                                .done(function(result) {
                                    app.user.loggedOn  = true;
                                    app.user.token     = result;
                                    app.user.firstName = 'John';
                                    app.user.lastName  = 'Doe';
                                    self.router.redirectTo('/about');
                                }).fail(function(xhr, status, err) {
                                    alert(`Login failed with status: ${err}`);
                                });
                            }
                        });
            }
        }
    },
    initialize: function(options) {
        this.router       = app.network.router;
        this.loginService = new LoginService();
        this.model        = new UserModel();
        this.model.on('all', function(e) {
            console.log(`UserModel event ${e}`);
        }, this);
    },
    render: function() {
        this.renderWithTemplate();
        return this;
    }
});
