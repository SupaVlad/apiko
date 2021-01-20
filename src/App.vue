<template>
  <div class="main">
    <navbar></navbar>
    <main class="container main-container">
      <router-view></router-view>
    </main>
    <appfooter></appfooter>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import appfooter from "./components/AppFooter";

export default {
  components: {
    navbar,
    appfooter
  }
};
</script>
