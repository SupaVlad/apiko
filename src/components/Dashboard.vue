<template>
  <div class="container">
    <div class="card-wrapper">

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      posts: "loadedPosts"
    }),
  },
};
</script>
