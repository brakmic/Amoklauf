//init the dependencies and start the app
require('./config/deps.js');
let app              = require('ampersand-app');
let router           = app.network.router;
let basePath         = app.network.basePath || '/';
let domReady         = require('domready');
let MainView         = require('./ui/views/main-view');
let rootEl           = 'app';

class App {
  constructor() {
      this.router = app.router;
      domReady(() => {
          this.initUI();
          this.initRouting();
          app.navigate('/home');
      });
  }
  initUI() {
      this.mainView = new MainView({
            model: app.user,
            el: document.getElementById(rootEl)
        });
      this.mainView.render();
  }
  initRouting() {
      router.on('page', this.mainView.handleNewPage, this.mainView);
      router.history.start({pushState: true, root: basePath, silent: true});
  }
}

module.exports = window.App = new App();
