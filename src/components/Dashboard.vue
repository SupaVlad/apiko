<template>
  <div class="container">
    <div class="card-wrapper">
      <div v-for="post in posts" :key="post.title" class="card">
        <div class="card__inner">

          <img :src="post.imageUrl" class="card__img">
          <span class="card__name">{{ post.price }}</span>
          <span class="card__price">${{ post.title }}</span>
        </div>
        <div class="card__descr">

        </div>


      </div>
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
  created () {
    this.$store.dispatch('loadPosts');
  }
};
</script>
