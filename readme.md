# Foundation-webpack :fire:
Responsive app using Zurb foundation 6 + webpack + isotope

# Features
- Zurb Foundation 6
- Sass compilation and prefixing
- JavaScript module bundling with webpack 4
- Isotope multi-select filters
- Handlebars templates with Panini
- Built-in BrowserSync server for synchronized testing
- Components folder structure
- Components are namespaced with BEM
- SVG sprites are automatically generated and served
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression


## Custom SCSS files purpose
- **_typography.scss** is inspired by material-design with a more friendly naming convention easily-maintainable font-sizes across viewports
- **_spaces.scss** to keep spacing between elements consistent across the app
- **_global.scss** for app-wide styles (prefixed with .global__element-name)
- **_overrides.scss** for third-parties overrides
- **_colors.scss** for maintaining app custom colors (easier maintainability than foundation's _settings)

## Installation

You'll need:

- [Yarn](https://yarnpkg.com/lang/en/docs/install) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Git](https://git-scm.com/)

### Using the CLI

Clone the repo:
```bash
git clone https://github.com/ramyelashri/foundation-webpack
```

Install dependencies:

```bash
cd foundation-webpack
yarn install
```

The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.

Now to start your project run 

```bash
yarn start
```

Finally, your finished app will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.