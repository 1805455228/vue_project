import Vue from 'vue'
import Router from 'vue-router'

import TabBar from '@/view/book/tabBar'
import HeadNav from '@/view/book/headNav'
import Home from '@/view/book/home'

import BookList from '@/view/book/booklist'
import DirectoryList from '@/view/book/directoryList'
import ImageList from '@/view/book/imageList'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/head',
      name: 'HeadNav',
      component: HeadNav
    },
    {
      path: '/bottom',
      name: 'TabBar',
      component: TabBar
    },
    {
      path: '/booklist',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/directoryList/:id',
        name: 'DirectoryList',
      component: DirectoryList
    },
    {
      path: '/imageList/:bookId/:chapterId',
      name: 'ImageList',
      component: ImageList
    }
  ]
})
