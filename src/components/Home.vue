<template>
    <div class="container">
        <div class="card-wrapper">
            <div v-for="post in posts" :key="post.id" class="card">
                <div class="card__inner">

                    <img :src="post.imageUrl" class="card__img">
                    <span class="card__name">{{ post.title }}</span>
                    <span class="card__price">${{ post.price }}</span>
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
    };
</script>
