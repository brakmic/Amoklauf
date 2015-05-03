'use strict';
var View               = require('ampersand-view');
var ViewSwitcher       = require('ampersand-view-switcher');
var _                  = require('underscore');
var domify             = require('domify');
var mainViewTemplate   = require('../templates/main-view.html');
var htmlHeaderTemplate = require('../templates/html-header.html');
var dom                = require('ampersand-dom');
var setFavicon         = require('favicon-setter');
var app                = require('ampersand-app');
var childPageId        = 'child-page';
var pageTitle          = 'Amoklauf';
var router             = app.network.router;

//This is a main view which is also a "view switcher" for other views.
//Those views will be hosted inside a preordained position inside view-switcher's
//structure. Check its "render" method and also read the into from
//ampersand-view-switcher: https://www.npmjs.com/package/ampersand-view-switcher
module.exports = View.extend({
    template: mainViewTemplate,
    initialize: function() {
        this.listenTo(router, 'page', this.handleNewPage);
    },
    bindings: {
        'model.fullName': {
            type: 'text',
            hook: 'user-fullname'
        }
    },
    events: {
        'click a[href]': 'handleLinkClick'
    },
    render: function() {
        document.head.appendChild(domify(htmlHeaderTemplate));
        this.renderWithTemplate();
        //take the element with the hook ('child-page') and make it the root-el
        //for all other views
        this.pageSwitcher = new ViewSwitcher(this.queryByHook(childPageId), {
            show: function(newView, oldView) {
                document.title = _.result(newView, 'pageTitle') || pageTitle;
                document.scrollTop = 0;
                //when a page gets switched make it visible in the top-menu
                dom.addClass(newView.el, 'active');
                app.currentPage = newView;
            }
        });

        //setFavicon('your-favicon-image');
        return this;
    },

    handleNewPage: function(view) {
        this.pageSwitcher.set(view);
        this.updateActiveNav();
    },
    //for client-side routing
    handleLinkClick: function(e) {
        var aTag = e.target;
        var host = aTag.host;
        if (host === '') {
            host = location.host;
        }

        var local = host === window.location.host;

        if (local && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
            e.preventDefault();
            app.navigate(aTag.pathname);
        }
    },
    //this is a classical example one can find in AmpersandJS docs.
    //slightly expanded to ignore some "buttons" which are not to be marked as
    //active/inactive.
    updateActiveNav: function() {
        var path = window.location.pathname.slice(1);

        this.queryAll('.nav a:not(.non-activatable)[href]').forEach(function(aTag) {
            var aPath = aTag.pathname.slice(1);

            if ((!aPath && !path) || (aPath && path.indexOf(aPath) === 0)) {
                dom.addClass(aTag.parentNode, 'active');
            } else {
                dom.removeClass(aTag.parentNode, 'active');
            }
        });
    }
});
