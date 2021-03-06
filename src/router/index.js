import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/views/profile.vue'
import reservation from '@/views/reservation.vue'
import Picktime from '@/views/Picktime.vue'
import Matchresult from '@/views/Matchresult.vue'
import Reservationsuccess from '@/views/Reservationsuccess.vue'
import Feeling from '@/views/Feeling.vue'
import Temp from '@/views/Temp.vue'
import DiaryMain from '@/views/DiaryMain.vue'
import DiaryWrite from '@/views/DiaryWrite.vue'
import Home from '@/views/Homepage.vue'
import reserve from '@/views/reserve.vue'
import start from '@/views/start.vue'
import analysis from '@/views/analysis.vue'
import Otherresource from '@/views/Otherresource.vue'
import Press from '@/yo_0512/Press.vue'
import PressQ1 from '@/yo_0512/PressQ1.vue'

/* 新增 */
import test from '@/views/test.vue'
import Press2 from '@/views/Press.vue'
import PressResult from '@/views/PressResult.vue'

Vue.use(Router)

export default new Router({
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: reservation
    },
    {
      path: '/Matchresult',
      name: 'Matchresult',
      component: Matchresult
    },
    {
      path: '/Picktime',
      name: 'Picktime',
      component: Picktime
    },
    {
      path: '/Reservationsuccess',
      name: 'Reservationsuccess',
      component: Reservationsuccess
    },
    {
      path: '/temp',
      component: Temp
    },
    {
      path: '/feeling',
      component: Feeling
    },
    {
      path: '/diary',
      component: DiaryMain
    },
    {
      path: '/diary/write',
      component: DiaryWrite
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/reserve',
      component: reserve
    },
    {
      path: '/start',
      component: start
    },
    {
      path: '/analysis',
      component: analysis
    },
    {
      path: '/Otherresource',
      name: 'Otherresource',
      component: Otherresource
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    },
    {
      path: '/press/q1',
      name: 'PressQ1',
      component: PressQ1
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/Press2',
      name: 'Press2',
      component: Press2
    },
    {
      path: '/Press/Result',
      name: 'PressResult',
      component: PressResult
    }
  ]
})
