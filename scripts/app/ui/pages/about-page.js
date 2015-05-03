let BasePage = require('./base-page');
let template = require('../templates/about-page.html');

module.exports = BasePage.extend({
      pageTitle: 'About',
      template: template
});