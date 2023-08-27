import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import Home from "../views/Home.vue"
import SingleProduct from "../views/SingleProduct.vue"
import Contact from "../views/Contact.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import Brand from "../views/Brand.vue";
import Category from "../views/Category.vue";
import Profile from "../views/Profile.vue"
import store from "../store";

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }
const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
        meta: {requireLogin: true},
    },
    {
        path: "/Produk/:slug",
        name: "SingleProduct",
        component: SingleProduct
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
        meta: {requireLogin: true},
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
        meta: {requireLogin: true},
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
        meta: { requiresLogin: true },
      },
    {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
        meta: { requiresLogin: true },
      },
    {
        path: "/Brand",
        name: "Brand",
        component: Brand,
        meta: {requireLogin: true},
    },
    {
        path: "/Category",
        name: "Category",
        component: Category,
        meta: {requireLogin: true},
    },
    {
        path: "/profile",
        name: "Profile",
        beforeEnter: cekToken,
        component: Profile,
        meta: {requireLogin: true},
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;