<template>
    <div class="card__wrapper">
        <div class="card__create">
            <h4>Add product</h4>
            <form @submit.prevent="onCreatePost">

                <div class="create__form-group">
                    <label for="title" class="auth__form-label">Title<span>*</span></label>
                    <div class="create__form-group-inner">
                        <input
                                name="title"
                                id="title"
                                v-model="form.title"
                                required
                        />
                    </div>
                </div>

                <div class="create__form-group">
                    <label for="location" class="auth__form-label">Location<span>*</span></label>
                    <div class="create__form-group-inner">
                        <input
                                name="location"
                                id="location"
                                v-model="form.location"
                                required
                        />
                    </div>
                </div>


                <div class="create__form-group">
                    <label for="description" class="auth__form-label">Description</label>
                    <div class="create__form-group-inner">
                        <input
                                name="description"
                                id="description"
                                v-model="form.description"
                        />
                    </div>
                </div>

                <div class="create__form-group">
                    <label class="auth__form-label">Photos</label>
                    <div class="create__form-group-inner">
                        <button @click="onPickFile">Upload Image</button>
                        <input
                                type="file"
                                style="display: none"
                                ref="fileInput"
                                accept="image/*"
                                @change="onFilePicked">
                    </div>
                </div>

                <div>
                    <img :src="imageUrl" height="150">
                </div>

                <div class="create__form-group">
                    <label for="price" class="auth__form-label">Price</label>
                    <div class="create__form-group-inner">
                        <input
                                name="price"
                                id="price"
                                v-model.number="form.price"
                                required
                        />
                    </div>
                </div>

                <div class="create__form-group">
                    <button class="create__btn"
                            :disabled="!formIsValid"
                            type="submit">Create Post</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    title: '',
                    location: '',
                    description: '',
                    price: '',
                    image: null
                },
                imageUrl: '',
            }
        },
        computed: {
            formIsValid () {
                return !!this.form.title && !!this.form.location && !!this.imageUrl && !!this.form.price
            },
        },
        methods: {
            onCreatePost () {
                if (!this.formIsValid || !this.form.image) {
                    return
                }
                // const postData = {
                //     title: this.title,
                //     location: this.location,
                //     description: this.description,
                //     image: this.image,
                //     price: this.price
                // }
                this.$store.dispatch('createPost', this.form)
                    .then(() => {
                        this.$router.push({name: 'Home'})
                    })
            },
            onPickFile () {
                this.$refs.fileInput.click()
            },
            onFilePicked (event) {
                const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.form.image = files[0]
            }
        }
    }
</script>
