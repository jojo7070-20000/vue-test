import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import FormTest from '@/components/FormTest'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'Form',
      component: FormTest
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    }
  ]
})
