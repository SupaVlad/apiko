<template>
  <div>
    <nav v-if="['login', 'Register'].includes($route.name)" class="navbar">
      <div class="container">
        <div class="header-wrapepr">
          <router-link to="/" class="navbar__logo">
            <img src="../assets/img/logo.svg" alt="Logo" border=0 class="SVGImg">
          </router-link>
          <div class="navbar__inner" id="navbarSupportedContent">
            <ul class="navbar__nav">
              <template v-if="user.loggedIn">
                <div class="nav-item">{{user.data.displayName}}</div>
                <li class="nav-item">
                  <router-link to="create" class="auth__create-link">+ Add</router-link>
                </li>
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
          <div class="navbar__inner-mob">
            <img v-if="!menuStatus" src="../assets/img/b-burger.svg" alt="Logo" border=0 class="burger-img" @click="menuStatus =! menuStatus">
            <img v-else src="../assets/img/burger.svg" alt="Logo" border=0 class="burger-img" @click="menuStatus =! menuStatus">
            <transition name="fade">
              <nav class="row" v-if="menuStatus">
                <ul class="">
                  <ul class="navbar__nav">
                    <template v-if="user.loggedIn">
                      <div class="nav-item nav-item-user">{{user.data.displayName}}</div>
                      <li class="nav-item">
                        <router-link to="create" class="auth__create-link">+ Add</router-link>
                      </li>
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
                  <div class="navbar__like" @click="isShow = !isShow">
                    <div v-if="isShow">
                      <img src="../assets/img/like.svg" alt="Logo" border=0 class="SVGImg">
                    </div>
                    <div v-else>
                      <img src="../assets/img/like-w.svg" alt="Logo" border=0 class="SVGImg">
                    </div>
                  </div>
                </ul>
              </nav>
            </transition>
          </div>
        </div>
      </div>
    </nav>
    <nav v-if="['CreatePost'].includes($route.name)" class="navbar navbar-dark">
      <div class="container">
        <div class="header-wrapepr">
          <router-link to="/" class="navbar__logo">
            <img src="../assets/img/logo-l.svg" alt="Logo" border=0 class="SVGImg">
          </router-link>
          <div class="navbar__inner" id="navbarSupportedContentD">
            <ul class="navbar__nav">
              <template v-if="user.loggedIn">
                <div class="nav-item nav-item-user">{{user.data.displayName}}</div>
                <li class="nav-item">
                  <router-link to="create" class="auth__create-link" v-if="!['CreatePost'].includes($route.name)">+ Add</router-link>
                </li>
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
          <div class="navbar__inner-mob">
            <img src="../assets/img/burger.svg" alt="Logo" border=0 class="burger-img" @click="menuStatus =! menuStatus">
            <transition name="fade">
              <nav class="row" v-if="menuStatus">
                <ul class="">
                  <ul class="navbar__nav">
                    <template v-if="user.loggedIn">
                      <div class="nav-item nav-item-user">{{user.data.displayName}}</div>
                      <li class="nav-item">
                        <router-link to="create" class="auth__create-link">+ Add</router-link>
                      </li>
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
                  <div class="navbar__like" @click="isShow = !isShow">
                    <div v-if="isShow">
                      <img src="../assets/img/like.svg" alt="Logo" border=0 class="SVGImg">
                    </div>
                    <div v-else>
                      <img src="../assets/img/like-w.svg" alt="Logo" border=0 class="SVGImg">
                    </div>
                  </div>
                </ul>
              </nav>
            </transition>
          </div>
        </div>
      </div>
    </nav>
    <nav v-if="['Home'].includes($route.name)" class="navbar navbar-dark-s">
      <div class="container">
        <div class="header-wrapepr">
          <router-link to="/" class="navbar__logo">
            <img src="../assets/img/logo-l.svg" alt="Logo" border=0 class="SVGImg">
          </router-link>
          <div class="navbar__inner" id="navbarSupportedContentS">
            <ul class="navbar__nav">
              <template v-if="user.loggedIn">
                <div class="nav-item nav-item-user">{{user.data.displayName}}</div>
                <li class="nav-item">
                  <router-link to="create" class="auth__create-link">+ Add</router-link>
                </li>
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
            <div class="navbar__like" @click="isShow = !isShow">
              <div v-if="isShow">
                <img src="../assets/img/like.svg" alt="Logo" border=0 class="SVGImg">
              </div>
              <div v-else>
                <img src="../assets/img/like-w.svg" alt="Logo" border=0 class="SVGImg">
              </div>
            </div>
          </div>
          <div class="navbar__inner-mob">
            <img src="../assets/img/burger.svg" alt="Logo" border=0 class="burger-img" @click="menuStatus =! menuStatus">
            <transition name="fade">
              <nav class="row" v-if="menuStatus">
                <ul class="">
                  <ul class="navbar__nav">
                    <template v-if="user.loggedIn">
                      <div class="nav-item nav-item-user">{{user.data.displayName}}</div>
                      <li class="nav-item">
                        <router-link to="create" class="auth__create-link">+ Add</router-link>
                      </li>
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
                  <div class="navbar__like" @click="isShow = !isShow">
                    <div v-if="isShow">
                      <img src="../assets/img/like.svg" alt="Logo" border=0 class="SVGImg">
                    </div>
                    <div v-else>
                      <img src="../assets/img/like-w.svg" alt="Logo" border=0 class="SVGImg">
                    </div>
                  </div>
                </ul>
              </nav>
            </transition>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return{
      menuStatus: false
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      isShow: "isShow",
    }),
    isShow : {
      get () {
        return this.$store.state.isShow
      },
      set (value) {
        this.$store.commit('setShow', value)
      }
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.replace({
          //   name: "Home"
          // });
        });
    }
  }
};
</script>
