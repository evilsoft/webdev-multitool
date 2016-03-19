## A Web Developer's Multi-tool

This project is an Electron App that targets multiple operating systems to provide common tools that a Web Developer would need.

The entire project has been livecoded at this channel [evilsoft](http://bit.ly/1MeS57v). Look there for updates and to view past videos.

The tech used in this project is as follows:

* [electron](http://electron.atom.io/) - running nodejs applications as native binaries for targeting multiple operating systems.
* [babel](https://babeljs.io/) - es2015 for both render(webpack babel-loader) and main(babel require hook).
* [webpack](https://webpack.github.io/) - bundling of JS and CSS for the render process.
* [less](http://lesscss.org/) - stylesheet composition. Uses the autoprefixer plugin for adding vendor prefixes automatically.
* [mithril](http://mithril.js.org/) - frontend application framework, with JSX compilation.

Right now this is in development and does not have a build pipeline added for building the target binaries.

### Getting Started

Clone this repository onto your local machine and then navigate to the project folder.

Once in there, run:

```
$ npm install
```

This will pull down all the dependencies needed to develop locally against this project. This also includes a prebuilt electron binary that will
run this project for development.

All that is left to do, is to start up the application. You do this by running the following in the project folder:

```
$ npm run start
```

Once everything is built, the application will start up.
