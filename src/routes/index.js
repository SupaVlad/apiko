import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import CreatePost from '../components/CreatePost'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/create',
        name: 'CreatePost',
        component: CreatePost
    }
]
});

export default router
