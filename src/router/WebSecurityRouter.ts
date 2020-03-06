import XSS from '../views/WebSecurity/XSS.vue';
import CSRF from '../views/WebSecurity/CSRF.vue';
import Other from '../views/WebSecurity/Other.vue';

const routes = [
  {
    path: '/es6/xss',
    name: 'xss',
    component: XSS,
  },
  {
    path: '/es6/CSRF',
    name: 'CSRF',
    component: CSRF,
  },
  {
    path: '/es6/other',
    name: 'other',
    component: Other,
  },
];

export default routes;
