let app  = require('ampersand-app');
let View = require('ampersand-view');
let template = require('../templates/base-page.html');
//this is the BasePage
//all other pages extend from it
//in future versions a simple "module management" will be implemented
module.exports = View.extend({
    pageTitle: 'Base Page',
    template: template,
    initialize: function(options) {
        if (options &&
            options.module) {
            this.module = new options.module();
            app.modules[this.module.name] = this.module;
            console.log(`Created module ${this.module.name}`);
        }
    },
    render: function() {
        this.renderWithTemplate();
        return this;
    },
    init: function() {
        if (this.module &&
            this.module.init) {
            this.module.init();
        console.log(`Initialized module ${this.module.name}`);
        }
    }
});