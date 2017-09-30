# BetterNews

> A beautiful version of Hackernews

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# start the node server
npm run server

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Project Details

The project is built using the following technologies -
* VueJS as a front end framework

----

### FrontEnd

This is the structure for the front end.

```
src/
|__ api/
|__ assets/
|__ components/
|__ router/
|__ store/
|__ App.vue/
|__ main.js/

```

The app instantiates from `main.js`. We create a `new Vue` instance and load it with our routes and store. Store is a flux-like way to do state management. Everything on the app is attached to a state, which is changed using mutators and actions. All API calls go through actions, which in turn call a mutator to mutate the state of the app, which in turn triggers changes on the template. Each template is scoped with its own styles.

The code for mutators and actions can be found in `store/` - index.js creates a new instance of Vuex store and includes getters (which are used by Vue components to retrieve data) and mutators / actions which are used to update data.

----

### Tests

I have not written extensive test cases, but just for the purpose to demo how unit tests and e2e tests should work.

Tests could be found under `test/`. There are karma unit tests under the `unit/` directory and e2e tests using Nightwatch under the `e2e` directory. Karma can use Phantom or Chrome or another web-driver, please modify the config in karma.conf.js as per your requirement.

Also, Nightwatch right now is using Selenium.

My e2e test, for demo purposes just tests the Home page and see if a text is displayed on the screen for e2e
My unit test, loads the Home component and uses the $el selector to select a component and verifies if a text exists.

----

### Further Improvements

[] - Improve UI
[] - Load more news
[] - Load transitions in a better way

----

This was a fun project. Feel free to write to me on mailme@rizwaniqbal.com in case of doubts / queries.
