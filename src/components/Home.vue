<template>
    <div class="container-wrapper">
        <div class="container-inner">
            <div class="search-wrapper">
                <img src="../assets/img/search.svg" class="search-title-ico">
                <input class="search-title-wrapper" type="text" v-model="search" placeholder="Search products by name"/>
                <img src="../assets/img/loc.svg" class="search-loc-ico">
                <input class="search-location-wrapper" type="text" v-model="searchLoc" placeholder="Search by location"/>
            </div>
            <div class="filter-wrapper">
                <img src="../assets/img/grid.svg" class="filter-ico">
                <div class="filter-category-wrapper">
                    <select v-model="selectedCategory">
                        <option value="" disabled selected>Choose Category</option>
                        <option>All</option>
                        <option>food</option>
                        <option>clothes</option>
                        <option>furniture</option>
                        <option>entertainment</option>
                        <option>services</option>
                        <option>other</option>
                    </select>
                </div>
                <div class="filter-price-wrapper">
                    <input type="text" v-model="fromPrice" placeholder="Price from (USD)"/>
                    <input type="text" v-model="toPrice" placeholder="Price to (USD)"/>
                </div>
            </div>

            <div class="container">
                <div class="card-wrapper">
                    <div v-for="post in posts" :key="post.id" class="card">
                        <div class="card__inner">
                            <img :src="post.imageUrl" class="card__img">
                            <span class="card__name">{{ post.title }}</span>
                            <span class="card__price">${{ post.price }}</span>
                            <div class="card__like" @click="post.isLike = !post.isLike">
                                <div class="card__like-inner" v-if="post.isLike">
                                    <img src="../assets/img/like.svg" alt="Logo" border=0 class="SVGImg">
                                </div>
                                <div class="card__like-inner" v-else>
                                    <img src="../assets/img/notlike.svg" alt="Logo" border=0 class="SVGImg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import { mapGetters } from "vuex";

    export default {
        data() {
            return {
                search: '',
                searchLoc: '',
                fromPrice: '',
                toPrice: '',
                selectedCategory:'',
            }
        },
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user",
                posts: "loadedPosts",
                isShow: "isShow"
            }),
            ...mapGetters(['loadedPosts']),
            posts(){
                return this.loadedPosts.filter(post => {
                    var title = post.title.toLowerCase().includes(this.search.toLowerCase()),
                        loc = post.location.toLowerCase().includes(this.searchLoc.toLowerCase()),
                        price = (this.toPrice !== '') ? ((post.price > 0 && post.price >= this.fromPrice && post.price <= this.toPrice) ? post : '') : ((post.price > 0 && post.price >= this.fromPrice) ? post : ''),
                        category = (this.selectedCategory === '' || this.selectedCategory === 'All') ? this.loadedPosts : (post.category === this.selectedCategory),
                        like = (this.isShow === true) ? (post.isLike === true) : (this.loadedPosts);
                    return title && loc && category && price && like;
                })
            },
        },
    };
</script>
