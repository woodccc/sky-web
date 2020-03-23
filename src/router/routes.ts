import Home from '../views/Home.vue';

import CSSRouter from './CSSRouter';
import WrittenExaminationRouter from './WrittenExaminationRouter';
import VueRouter from './VueRouter';
import ES6Router from './ES6Router';
import WebSecurityRouter from './WebSecurityRouter';
import PerformanceOptimizationRouter from './PerformanceOptimizationRouter';
import BrowserRouter from './BrowserRouter';
import DemoRouter from './DemoRouter';

import Webpack from '../views/Webpack/index.vue';
import EventLoop from '../views/EventLoop/index.vue';

export default [
  ...CSSRouter,
  ...WrittenExaminationRouter,
  ...VueRouter,
  ...ES6Router,
  ...WebSecurityRouter,
  ...PerformanceOptimizationRouter,
  ...BrowserRouter,
  ...DemoRouter,
  {
    path: '/webpack/index',
    name: 'webpack',
    component: Webpack,
  },
  {
    path: '/event-loop/index',
    name: 'event-loop',
    component: EventLoop,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];
