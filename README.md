# README #

https://github.com/react-webpack-generators/generator-react-webpack


Please make sure to edit your newly generated `package.json` file to set description, author information and the like.

## Generating new components
```bash
# After setup of course :)
# cd my-new-project
yo react-webpack:component my/namespaced/components/name
```

The above command will create a new component, as well as its stylesheet and a basic testcase.

## Generating new stateless functional components
```
yo react-webpack:component my/namespaced/components/name --stateless
```

Stateless functional components where introduced in React v0.14. They have a much shorter syntax than regular ones and no state or lifecycle methods at all. Please read the [React 0.14 release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) to get more information about those components.

___Note___: You will still be able to set properties for stateless components!

## Adding PostCSS plugins
If you have enabled [PostCSS](https://github.com/postcss/postcss) at generation time, install your PostCSS plugins via npm and *require* it in **postcss** function in *cfg/base.js*.

Example for autoprefixer:
```bash
cd my-new-project
npm install autoprefixer
```
Require in *cfg/base.js*
```JavaScript
...
postcss: function () {
  return [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 8']
    })
  ];
}
...
```

## Usage
The following commands are available in your project:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

### Naming Components
We have opted to follow [@floydophone](https://twitter.com/floydophone) convention of uppercase for component file naming e.g. [Component.js](https://github.com/petehunt/ReactHack/tree/master/src/components). I am open to suggestions if there is a general objection to this decision.

### Modules
Each component is a module and can be required using the [Webpack](http://webpack.github.io/) module system. [Webpack](http://webpack.github.io/) uses [Loaders](http://webpack.github.io/docs/loaders.html) which means you can also require CSS and a host of other file types. Read the [Webpack documentation](http://webpack.github.io/docs/home.html) to find out more.