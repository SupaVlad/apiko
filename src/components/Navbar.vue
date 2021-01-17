<template>
  <div class="container">
    <nav class="navbar">
      <router-link to="/" class="navbar__logo">
        <img src="../assets/img/logo.svg" alt="Logo" border=0 class="SVGImg">
      </router-link>
      <div class="navbar__inner" id="navbarSupportedContent">
          <ul class="navbar__nav">
            <template v-if="user.loggedIn">
              <div class="nav-item">{{user.data.displayName}}</div>
              <li class="nav-item">
                <a class="nav-link" @click.prevent="signOut">Sign out</a>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link to="register" class="nav-link">Register</router-link>
              </li>
              <li class="nav-item">
                <router-link to="login" class="nav-link">Login</router-link>
              </li>
            </template>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>
