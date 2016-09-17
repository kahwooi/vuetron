## Overview
The aim of this project is to quickly bootstrapping an electron apps using [vuejs](http://vuejs.org/). vuetron use of `vue-cli` for scaffolding, `webpack` and `vue-loader`, and some of the most used plugins like `vue-router`, `vuex`, and more.

### Getting Started
This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app.
```bash
# Install electron and webpack-dev-server 
npm install -g electron webpack-dev-server

# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init kahwooi/vuetron my-project

# Install dependencies and run your app in development mode
cd my-project
npm install
npm run dev
# View app using browser at http://localhost:8080, automatically updates the browser on changes.

# Run as electron desktop app
npm start
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.