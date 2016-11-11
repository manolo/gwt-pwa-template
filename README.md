## A Template for GWT PWAs

It's a standard maven project able to compile and run a GWT Application and produce the service worker and manifest for PWAs.

### Build

Run in your terminal:

```
  $ mvn clean package
```

Then you have the `.war` ready for deploy in the `target` folder.


### Develop

1. Import the project in your favourite Java IDE.
2. Run `mvn gwt:devmode` in a terminal or from your IDE.
3. Navigate to `http://localhost:8888/`
4. Now you can modify your java code and reload.


### Configuring precache resources

Modify the file `sw-precache-config.js` and run `mvn clean package`.

You can read all the options available reading the `sw-precache` [documentation](https://github.com/GoogleChrome/sw-precache).

