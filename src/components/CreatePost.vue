<template>
    <div class="card__wrapper">
        <div class="card__create">
            <h4>Add product</h4>
            <form @submit.prevent="onCreatePost">

                <div class="create__form-group">
                    <label for="title" class="auth__form-label">Category<span>*</span></label>
                    <div class="create__form-group-inner">
                        <select v-model="form.category">
                            <option>food</option>
                            <option>clothes</option>
                            <option>furniture</option>
                            <option>entertainment</option>
                            <option>services</option>
                            <option>other</option>
                        </select>
                    </div>
                </div>

                <div class="create__form-group">
                    <label for="title" class="auth__form-label">Title<span>*</span></label>
                    <div class="create__form-group-inner">
                        <input
                                name="title"
                                id="title"
                                v-model="form.title"
                                placeholder="For example: Iron man suit"
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
                                placeholder="For example: Los Angeles, CA"
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
                                placeholder="For example: Iron man suit"
                                v-model="form.description"
                        />
                    </div>
                </div>

                <div class="create__form-group">
                    <label class="auth__form-label">Photos</label>
                    <div class="create__form-group-inner create__form-group-inner-add">
                        <button @click="onPickFile" class="create__form-group-inner-btn"></button>
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
                                type="number"
                                v-model.number="form.price"
                                placeholder="For example: 22"
                                required
                        />
                    </div>
                </div>

                <div class="create__form-group create__form-group-sub">
                    <button class="create__btn"
                            :disabled="!formIsValid"
                            type="submit">SUBMIT</button>
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
                    category: '',
                    title: '',
                    location: '',
                    description: '',
                    price: '',
                    image: null,
                    isLike: false
                },
                imageUrl: '',
            }
        },
        computed: {
            formIsValid () {
                return !!this.form.category && !!this.form.title && !!this.form.location && !!this.imageUrl && !!this.form.price
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
