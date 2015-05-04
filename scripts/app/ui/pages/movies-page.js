let app        = require('ampersand-app');
let BasePage   = require('./base-page');
let template   = require('../templates/movies-page.html');
let riot       = require('riot');
let MovieStore = require('../../control/stores/movie-store');
require('../tags/movies.tag');

module.exports = BasePage.extend({
    pageTitle: 'Movies Page',
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
        this.movieStore = new MovieStore();
        RiotControl.addStore(this.movieStore);
        riot.mount('movies', {
                                title: 'Movies Collection'
                            });
    }
});
