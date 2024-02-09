import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Register from '../views/Register.vue'
import SharePriceHistory from '../views/SharePriceHistory.vue'
import SharePriceHistoryall from '../views/SharePriceHistoryall.vue'
import Transaction from '../views/Transaction.vue'
import UserLogin from '../views/admin/UserLogin.vue'
import User from '../views/User.vue'

const routes = [
  { path: "/",name:"home", component: Home },
  { path: "/login",name:"login", component: Login },
  { path: "/register",name:"register", component: Register },
  { path: "/transaction",name:"transaction", component: Transaction },
  {path: '/sharePriceHistories/:sharePriceId',name:"sharePriceHistoriesUser",component: SharePriceHistory,},
  {path: '/sharePriceHistories',name:"sharePriceHistories",component: SharePriceHistoryall,},
  {path: '/UserLogin',name:"UserLogin",component: UserLogin,},
  {path: '/User',name:"User",component: User,},
  
  // {path: '/:catchAll(.*)*',component: SharePriceHistoryall,},


];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;