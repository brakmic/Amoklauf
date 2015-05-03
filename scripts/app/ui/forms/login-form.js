let Form      = require('ampersand-form-view');
let InputView = require('ampersand-input-view');
//use AmpersandJS forms to maintain the (always) problematic HTML-forms
//more info: https://github.com/AmpersandJS/ampersand-form-view
let LoginForm = Form.extend({
    fields: function() {
        return [
            new InputView({
                template    : `<div class="control-group"><label class="control-label" for="username">
                                User Name</label><div class="controls"><input id="username" data-hook="username"></div></div>`,
                name        : 'username',
                type        : 'text',
                placeholder : 'User Name',
                parent      : this,
                value       : this.model.username || '',
                validityClassSelector: '.err',
                tests       : [
                    function(val) {
                        if (val.length < 1) {
                            return 'User name can not be empty';
                        }
                    }
                ]
            }),
            new InputView({
                template    : `<div class="control-group"><label class="control-label"
                                for="password">Password</label><div class="controls">
                                <input id="password" data-hook="password"></div></div>`,
                name        : 'password',
                placeholder : 'Password',
                type        : 'password',
                value       : this.model.password || '',
                parent      : this,
                required    : true
            })
        ];
    }
});

module.exports = LoginForm;
