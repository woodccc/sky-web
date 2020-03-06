import ComputedAndWatch from '../views/Vue/ComputedAndWatch.vue';
import VueLifecycle from '../views/Vue/VueLifecycle.vue';
import VueLifecycleOrder from '../views/Vue/VueLifecycleOrder.vue';
import NextTrick from '../views/Vue/NextTrick.vue';
import HowDesignComponent from '../views/Vue/HowDesignComponent.vue';
import TwoWayBind from '../views/Vue/TwoWayBind.vue';
import VirtualDOM from '../views/Vue/VirtualDOM.vue';
import Diff from '../views/Vue/Diff.vue';
import RouterMode from '../views/Vue/RouterMode.vue';
import ViewNotRefresh from '../views/Vue/ViewNotRefresh.vue';

const routes = [
  {
    path: '/vue/computed-and-watch',
    name: 'computed-and-watch',
    component: ComputedAndWatch,
  },
  {
    path: '/vue/vue-lifecycle',
    name: 'vue-lifecycle',
    component: VueLifecycle,
  },
  {
    path: '/vue/vue-lifecycle-order',
    name: 'vue-lifecycle-order',
    component: VueLifecycleOrder,
  },
  {
    path: '/vue/next-trick',
    name: 'next-trick',
    component: NextTrick,
  },
  {
    path: '/vue/how-design-component',
    name: 'how-design-component',
    component: HowDesignComponent,
  },
  {
    path: '/vue/two-way-bind',
    name: 'two-way-bind',
    component: TwoWayBind,
  },
  {
    path: '/vue/virtual-dom',
    name: 'virtual-dom',
    component: VirtualDOM,
  },
  {
    path: '/vue/diff',
    name: 'diff',
    component: Diff,
  },
  {
    path: '/vue/router-mode',
    name: 'router-mode',
    component: RouterMode,
  },
  {
    path: '/vue/view-not-refresh',
    name: 'view-not-refresh',
    component: ViewNotRefresh,
  },
];

export default routes;
