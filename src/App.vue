<template>
  <div>
    <navbar></navbar>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>
