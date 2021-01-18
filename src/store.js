import Vue from "vue";
import Vuex from "vuex";
import * as firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedPosts: [
      {
        id: 'afajfjadfaadfa323',
        title: 'title',
        description: 'some description',
        price: '222$',
      },
      {
        id: 'afajfjadfdasdas3',
        title: 'title2',
        description: 'some description2',
        price: '242$',
      }
    ],
    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    user(state){
      return state.user
    },
    loadedPosts (state) {
      return state.loadedPosts
    },
    loadedPost (state) {
      return (postId) => {
        return state.loadedPosts.find((post) => {
          return post.id === postId
        })
      }
    },
    loading (state) {
      return state.loading
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    setLoadedPosts (state, payload) {
      state.loadedPosts = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    createPost (state, payload) {
      state.loadedPosts.push(payload)
    },
    updatePost (state, payload) {
      const post = state.loadedPosts.find(post => {
        return post.id === payload.id
      })
      if (payload.title) {
        post.title = payload.title
      }
      if (payload.description) {
        post.description = payload.description
      }
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);

      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    loadPosts ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('posts').once('value')
          .then((data) => {
            const posts = []
            const obj = data.val()
            for (let key in obj) {
              posts.push({
                id: key,
                title: obj[key].title,
                description: obj[key].description,
                imageUrl: obj[key].imageUrl,
                price: obj[key].price,
              })
            }
            commit('setLoadedPosts', posts)
            commit('setLoading', false)
          })
          .catch(
              (error) => {
                console.log(error)
                commit('setLoading', false)
              }
          )
    },
    createPost ({commit, getters}, payload) {
      const post = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        price: payload.price,
        // imageUrl: payload.imageUrl
      }
      let imageUrl
      let key
      firebase.database().ref('posts').push(post)
          .then((data) => {
            key = data.key
            return key
          })
          .then(key => {
            const filename = payload.image.name
            const ext = filename.slice(filename.lastIndexOf('.'))
            return firebase.storage().ref('posts/' + key + '.' + ext).put(payload.image)
          })
          .then(fileData => {
            let imagePath = fileData.metadata.fullPath
            return firebase.storage().ref().child(imagePath).getDownloadURL()
                .then(url => {
                  imageUrl = url
                  console.log('File available at', url)
                  return firebase.database().ref('posts').child(key).update({imageUrl: imageUrl})
                })
          })
          .then(() => {
            commit('createPost', {
              ...post,
              imageUrl: imageUrl,
              id: key
            })
            console.log(imageUrl)
          })
          .catch((error) => {
            console.log(error)
          })
      // Reach out to firebase and store it
    },
  }
});
