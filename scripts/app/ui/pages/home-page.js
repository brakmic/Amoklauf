let BasePage            = require('./base-page');
let template            = require('../templates/home-page.html');
let app                 = require('ampersand-app');
let riot                = require('riot');
require('../tags/dummy.tag');

module.exports = BasePage.extend({
    pageTitle: 'Home Page',
    template: template,
    initialize: function(options) {
    },
    render: function() {
        this.renderWithTemplate();
        return this;
    },
    initUI: function() {
        this.initRiot();
    },
    showAppInfo: function() {
        console.log(`App Id: ${app.Id}`);
        console.log(`App Timestamp: ${app.timeStamp}`);
        console.log(`${app.name} v${app.version} has started.`);
    },
    initComponents: function() {
        let controller = new ComponentController();
        controller.initComponents();
        //ractiveComponents.init();
    },
    initRiot: function() {
        //here we mount a RiotJS tag and send some options to it.
        //The first parameter is the name of the tag like declared in its
        //tag-file. The second parameter is the "opts" object which will
        //later be used to read properties during the execution of the
        //logic inside <script></script> in dummy.tag file
        //But keep in mind that RiotJS doesn't expect you to explicitely
        //write a <script></script>. You can simply write your whole logic
        //after the last HTML-element inside a *.tag-file and RiotJS compiler
        //will automatically recognize it.
        //More info:  https://muut.com/riotjs/guide/#tag-syntax
        riot.mount('dummy', {
            title: 'I want to behave!',
              items: [
                { title: 'Avoid excessive coffeine', text: 'Argh!', done: true },
                { title: 'Be less provocative', text: 'Argh!',  },
                { title: 'Be nice to people', text: 'Argh!',  }
              ]
        });
    }
});
