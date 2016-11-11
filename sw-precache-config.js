module.exports = {
  verbose: true,
  replacePrefix: '',
  navigateFallback: '',
  runtimeCaching: [{
    urlPattern: /.*/,
    handler: 'cacheFirst',
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
    'MyApp/MyApp.nocache.js'
  ]
};
