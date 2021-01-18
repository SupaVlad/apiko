<template>
  <div>
    <navbar v-if="['login', 'Register'].includes($route.name)"></navbar>
    <navbard v-if="['CreatePost'].includes($route.name)"></navbard>
    <navbards v-if="['Home'].includes($route.name)"></navbards>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import navbard from "./components/NavbarD";
import navbards from "./components/NavbarDS";

export default {
  components: {
    navbar,
    navbard,
    navbards,
  }
};
</script>
