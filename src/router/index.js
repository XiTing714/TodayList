import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const TodayTask = () => import('views/TodayTask/TodayTask.vue')

const FocusMode = () => import('views/FocusMode/FocusMode.vue')
const SkinChange = () => import('views/SkinChange/SkinChange.vue')

const routes = [
  {
    path: '',
    redirect: 'todaytask'
  }
  ,
  {
    path: '/todaytask',
    component: TodayTask,
  },
  {
    path: '/inspire',
    component: FocusMode
  },
  {
    path: '/skin',
    component: SkinChange
  }
]

const router = new Router({
  /* mode: history, */
  routes
})

export default router