import LetConstVar from '../views/ES6/LetConstVar.vue';
import ArrowFunction from '../views/ES6/ArrowFunction.vue';
import Destructuring from '../views/ES6/Destructuring.vue';
import GeneratorPromiseAsync from '../views/ES6/GeneratorPromiseAsync.vue';
import Extends from '../views/ES6/Extends.vue';
import Module from '../views/ES6/Module.vue';

const routes = [
  {
    path: '/es6/let-const-var',
    name: 'let-const-var',
    component: LetConstVar,
  },
  {
    path: '/es6/arrow-function',
    name: 'arrow-function',
    component: ArrowFunction,
  },
  {
    path: '/es6/destructuring',
    name: 'destructuring',
    component: Destructuring,
  },
  {
    path: '/es6/generator-promise-async',
    name: 'generator-promise-async',
    component: GeneratorPromiseAsync,
  },
  {
    path: '/es6/extends',
    name: 'extends',
    component: Extends,
  },
  {
    path: '/es6/module',
    name: 'module',
    component: Module,
  },
];

export default routes;
