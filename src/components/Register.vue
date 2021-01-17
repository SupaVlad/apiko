<template>
  <div class="auth">
    <div class="auth__inner">
      <div class="auth__header">Register</div>
      <div class="auth__body">
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <form action="#" @submit.prevent="submit">
          <div class="auth__form-group">
            <label for="email" class="auth__form-label">Email</label>

            <div class="auth__form-group-inner">
              <input
                      id="email"
                      type="email"
                      class="auth__form-input"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="form.email"
              />
            </div>
          </div>

          <div class="auth__form-group">
            <label for="name" class="auth__form-label">Full name</label>

            <div class="auth__form-group-inner">
              <input
                      id="name"
                      type="name"
                      class="auth__form-input"
                      name="name"
                      value
                      required
                      autofocus
                      v-model="form.name"
              />
            </div>
          </div>

          <div class="auth__form-group">
            <label for="password" class="auth__form-label">Password</label>

            <div class="auth__form-group-inner">
              <input
                      id="password"
                      type="password"
                      class="auth__form-input"
                      name="password"
                      required
                      v-model="form.password"
              />
            </div>
          </div>

          <div class="auth__form-group">
              <button type="submit" class="auth__btn">Register</button>
          </div>
        </form>
      </div>
    </div>
    <div class="auth__footer">
      <span class="auth__footer-text">I already have an account, <router-link to="login" class="auth__footer-link">LOG IN</router-link></span>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
