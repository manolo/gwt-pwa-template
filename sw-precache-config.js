module.exports = {
  verbose: true,
  replacePrefix: '',
  navigateFallback: 'index.html',
  runtimeCaching: [{
    urlPattern: /.*/,
    handler: 'fastest',
    options: {
        cache: {
          maxEntries: 500,
          name: 'myapp-cache'
        }
    }
  }],
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'myapp/myapp.nocache.js',
    'myapp/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    'myapp/bower_components/font-roboto/roboto.html',
    'myapp/bower_components/iron-a11y-announcer/iron-a11y-announcer.html',
    'myapp/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html',
    'myapp/bower_components/iron-ajax/iron-ajax.html',
    'myapp/bower_components/iron-ajax/iron-request.html',
    'myapp/bower_components/iron-icon/iron-icon.html',
    'myapp/bower_components/iron-icons/iron-icons.html',
    'myapp/bower_components/iron-input/iron-input.html',
    'myapp/bower_components/polymer/polymer-micro.html',
    'myapp/bower_components/polymer/polymer-mini.html',
    'myapp/bower_components/polymer/polymer.html',
    'myapp/bower_components/promise-polyfill/Promise.js',
    'myapp/bower_components/promise-polyfill/promise-polyfill-lite.html',
    'myapp/bower_components/vaadin-grid/vaadin-grid.html',
    'myapp/bower_components/vaadin-grid/vaadin-grid.min.js',
    'myapp/contacts.json',
    'myapp/polymer.svg',
    'img/myapp-favicon.png',
    'img/myapp-144x144.png'
  ]
};
