import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";
import './assets/styles.sass';

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAPN21ZfQJPPpSfGJiCGIugXgPfGP3r5vY",
  authDomain: "apiko-cb670.firebaseapp.com",
  databaseURL: "https://apiko-cb670.firebaseio.com",
  projectId: "apiko-cb670",
  storageBucket: "apiko-cb670.appspot.com",
  messagingSenderId: "495795281944",
  appId: "1:495795281944:web:f23ccf0ae8eb86f224e36d"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
