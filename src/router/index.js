import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
//import PageSearch from '@/components/PageSearch'
//import PageIndex from '@/components/PageIndex'
//import PageAbout from '@/components/PageAbout'
//import PageExamineOverall from '@/components/PageExamineOverall'
//import PageExamineAttrData from '@/components/PageExamineAttrData'
//import PageExamineMarket from '@/components/PageExamineMarket'
//import PageOverall from '@/components/PageOverall'
//import PageAdd from '@/components/PageAdd'
//import PageLogin from '@/components/PageLogin'
//import PageMarket from '@/components/PageMarket'

const router = createRouter({
  history: createWebHashHistory(),
  //history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '/index',
      component: () => import('@/components/PageIndex'),
      //component: PageIndex,
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/PageIndex'),
      //component: PageIndex,
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/PageSearch'),
      //component: PageSearch,
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/PageAbout'),
      //component: PageAbout,
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/overall',
      name: 'overall',
      component: () => import('@/components/PageOverall'),
      //component: PageOverall,
      meta: {
        title: '大事件'
      }
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('@/components/PageMarket'),
      //component: PageMarket,
      meta: {
        title: '市场数据'
      }
    },
    {
      path: '/examine',
      name: 'examine',
      component: () => import('@/components/PageExamineOverall'),
      //component: PageExamineOverall,
      meta: {
        title: '审核'
      }
    },
    {
      path: '/examine_attr_data',
      name: 'examine_attr_data',
      component: () => import('@/components/PageExamineAttrData'),
      //component: PageExamineAttrData,
      meta: {
        title: '审核'
      }
    },
    {
      path: '/examine_market',
      name: 'examine_market',
      component: () => import('@/components/PageExamineMarket'),
      //component: PageExamineMarket,
      meta: {
        title: '审核'
      }
    },
    {
      path: '/page_add',
      name: 'page_add',
      component: () => import('@/components/PageAdd'),
      //component: PageAdd,
      meta: {
        title: '添加'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/PageLogin'),
      //component: PageLogin,
      meta: {
        title: '登录'
      }
    }
  ]
})
/*
const statue = {
  path: '*',
  component:PageIndex
}

export function setAddRoutes() {
  let currentRoutes = router.options.routes
  currentRoutes.push(statue)
  router.addRoute(currentRoutes)
}
*/
export default router