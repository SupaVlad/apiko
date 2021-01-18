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
  databaseURL: "https://apiko-cb670-default-rtdb.firebaseio.com",
  projectId: "apiko-cb670",
  storageBucket: "gs://apiko-cb670.appspot.com",
  messagingSenderId: "495795281944",
  appId: "1:495795281944:web:f23ccf0ae8eb86f224e36d"
};

export let firebaseApp  =firebase.initializeApp(configOptions);
export let db = firebaseApp.database();
export let postsRef = db.ref("posts");

console.log(postsRef.toJSON())

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.dispatch('loadPosts')
  }
}).$mount("#app");
