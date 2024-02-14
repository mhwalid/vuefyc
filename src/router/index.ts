import { createWebHistory, createRouter } from "vue-router";
// const isAuthenticated = document.cookie.includes('token');
// import { useAuthStore } from '../stores/auth'; 
// const authStore = useAuthStore();
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Register from '../views/Register.vue'
import SharePriceHistory from '../views/SharePriceHistory.vue'
import SharePriceHistoryall from '../views/SharePriceHistoryall.vue'
import Transaction from '../views/Transaction.vue'
import UserLogin from '../views/admin/UserLogin.vue'

const routes = [
  { path: "/",name:"home", component: Home ,beforeEnter: [checkIfLoggedhome]},
  { path: "/login",name:"login", component: Login },
  { path: "/register",name:"register", component: Register },
  { path: "/transaction",name:"transaction", component: Transaction , beforeEnter: [checkIfLogged] },
  {path: '/sharePriceHistories/:sharePriceId',name:"sharePriceHistoriesUser",component: SharePriceHistory,beforeEnter: [checkIfLogged] },
  {path: '/sharePriceHistories',name:"sharePriceHistories",component: SharePriceHistoryall,beforeEnter: [checkIfLogged] },
  {path: '/UserLogin',name:"UserLogin",component: UserLogin,beforeEnter: [checkIfLoggedadmin]}
  
  // {path: '/:catchAll(.*)*',component: SharePriceHistoryall,},
];
function checkIfLogged(to, from, next) {
 
  if(localStorage.getItem("user")){ 
    const mytime = JSON.parse(localStorage.getItem("user"));
    if (mytime.name=="USER") {
       next();
    } else {
        next('/login');
    }
  }else{
    next('/login');
  }
}
function checkIfLoggedhome(to, from, next) {
  if(localStorage.getItem("user")){ 
       next();
  }else{
    next('/login');
  }
}
function checkIfLoggedadmin(to, from, next) {
  if(localStorage.getItem("user")){
    console.log("awls")
    console.log(localStorage.getItem("user"))
    const mytime = JSON.parse(localStorage.getItem("user"));
    console.log(mytime)
    if (mytime.name=="ADMIN") {
      next();
    } else {
      next('/login');
    }
  }else{
    next('/login');
  }
 
}
console.log(localStorage.getItem("user"))

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;