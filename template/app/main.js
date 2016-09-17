import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Home from './components/home.vue';
import Login from './components/login.vue';
import Signup from './components/signup.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  '/login':{
    component: Login
  },
  '/signup': {
    component: Signup
  }
});

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
});
// Start the app on the #app div
router.start(App, '#app');