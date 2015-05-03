let BasePage         = require('./base-page');
let template         = require('../templates/contact-page.html');
let MessagingService = require('../../services/messaging-service');
let riot             = require('riot');
require('../tags/contact.tag');

module.exports = BasePage.extend({
      pageTitle: 'Contact',
      template: template,
      initialize: function() {
        this.messaging = new MessagingService();
      },
      render: function() {
        this.renderWithTemplate();
        return this;
      },
      //we will call this function in Router after the rendering has been done,
      //because RiotJS will manipulate DOM elements
      initUI: function() {
        this.initRiot();
      },
      initRiot: function() {
        //here we mount a RiotJS tag and send some options to it.
        //The first parameter is the name of the tag like declared in its
        //tag-file. The second parameter is the "opts" object which will
        //later be used to read properties during the execution of the
        //logic inside <script></script> in contact.tag file
        //But keep in mind that RiotJS doesn't expect you to explicitely
        //write a <script></script>. You can simply write your whole logic
        //after the last HTML-element inside a *.tag-file and RiotJS compiler
        //will automatically recognize it.
        //More info:  https://muut.com/riotjs/guide/#tag-syntax
        riot.mount('contact', { title: 'Send a message!', service: this.messaging });
    }
});