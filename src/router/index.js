import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const TodayTask = () => import('views/TodayTask/TodayTask.vue')
const AllTask = () => import('views/TodayTask/childComps/AllTask.vue')
const ActiveTask = () => import('views/TodayTask/childComps/ActiveTask.vue')
const DoneTask = () => import('views/TodayTask/childComps/DoneTask.vue')

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
    children: [
      {
        path: '',
        redirect: 'all'
      }
      ,
      {
        path: 'all',
        component: AllTask
      },
      {
        path: 'active',
        component: ActiveTask
      },
      {
        path: 'done',
        component: DoneTask
      }
    ]
  },
  {
    path: '/FocusMode',
    component: FocusMode
  },
  {
    path: '/SkinChange',
    component: SkinChange
  }
]

const router = new Router({
  /* mode: history, */
  routes
})

export default router