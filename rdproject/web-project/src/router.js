import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./components/SignUp.vue";
import BookList from "./components/BookList.vue";
import UserList from "./components/UserList.vue";
import UserEdit from "./components/UserEdit.vue";


const routes = [
    {
        path : '/signup',
        component : SignUp
    },
    {
        path : '/book/create',
        component : BookList
    },
    {
        path : '/userlist',
        component : UserList
    },
    {
        path : '/useredit/:id',
        component : UserEdit
    }
]


const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router
