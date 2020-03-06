interface AsideItem {
  label: string;
  name?: string;
  description?: string;
  url?: string
}

interface AsideGroup {
  label: string;
  description?: string;
  children: AsideItem[]
}

const CSSAside: AsideItem[] = [
  {
    label: '盒模型',
    name: 'box-model',
  },
  {
    label: '垂直居中方法',
    name: 'vertical-center',
  },
  {
    label: '三栏布局',
    name: 'three-columns-layout',
  },
  {
    label: '选择器权重计算方式',
    name: 'css-weight',
  },
  {
    label: '清除浮动的方法',
    name: 'clear-fix',
  },
  {
    label: 'flex',
    name: 'flex',
  },
  {
    label: '什么是BFC、可以解决哪些问题',
    name: 'BFC',
  },
  {
    label: 'position属性',
    name: 'position'
  },
  {
    label: '如何实现一个自适应的正方形',
    name: 'flex-square',
  },
  {
    label: '如何用css实现一个三角形',
    name: 'triangle'
  }
]

const WrittenExaminationAside: AsideItem[] = [
  {label: '防抖和节流', name: 'debounce-and-throttle'},
  {label: '深拷贝', name: 'deep-clone'},
  {label: '数组去重、数组乱序', name: 'array'},
  {label: '实现数组flat、filter等方法', name: 'array'},
  {label: '手写call、apply、bind', name: 'call-apply-bind'},
  {label: '继承（ES5/ES6）', name: 'inherit'},
  {label: 'sleep函数',},
  {label: '实现promise',},
  {label: '实现promise.all',},
  {label: '实现promise.retry',},
  {label: '将一个同步callback包装成promise形式',},
  {label: '写一个函数，可以控制最大并发数',},
  {label: 'jsonp的实现',},
  {label: 'eventEmitter(emit,on,off,once)', name: 'event-emitter'},
  {label: '实现instanceof',},
  {label: '实现new',name: 'new'},
  {label: 'lazyMan', name: 'lazy-man'},
  {label: '函数currying', name: 'currying'},
]

const ES6Aside: AsideItem[] = [
  {label: 'let、const、var区别', name: 'let-const-var'},
  {label: '箭头函数与普通函数的区别', name: 'arrow-function'},
  {label: '变量的解构赋值', name: 'destructuring'},
  {label: 'promise、async await、Generator的区别', name: 'generator-promise-async'},
  {label: 'ES6的继承与ES5相比有什么不同', name: 'extends'},
  {label: 'js模块化（commonjs/AMD/CMD/ES6）', name: 'module'},
]

const BrowserAside: AsideItem[] = [
  {label: '从输入URL到呈现页面过程', name: 'url'},
  {label: '强缓存、协商缓存、CDN缓存',},
  {label: 'HTTP2',},
  {label: 'HTTP状态码',},
  {label: '跨域（JSONP/CORS）',},
  {label: '跨域时如何处理cookie',},
  {label: '垃圾回收机制',},
]

const WebSecurityAside: AsideItem[] = [
  {label: 'https',},
  {label: '什么是xss，如何预防', name: 'xss'},
  {label: '什么是csrf，如何预防', name: 'CSRF'},
  {label: '其他', name: 'other'},
]

const VueAside: AsideItem[] = [
  {label: 'watch与computed的区别', name: 'computed-and-watch'},
  {label: 'vue生命周期及对应的行为',name: 'vue-lifecycle'},
  {label: 'vue父子组件生命周期执行顺序', name: 'vue-lifecycle-order'},
  {label: '组件间通讯方法',},
  {label: '如何实现一个指令',},
  {label: 'vue.nextTick实现原理', name: 'next-trick'},
  {label: 'diff算法', name: 'diff'},
  {label: '如何做到的双向绑定', name: 'two-way-bind'},
  {label: '虚拟dom为什么快',name: 'virtual-dom'},
  {label: '如何设计一个组件', name: 'how-design-component'},
  {label: 'vue-router的两种模式的区别', name: 'router-mode'},
  {label: 'vue视图不更新', name: 'view-not-refresh'},
]

const WebpackAside: AsideItem[] = [
  {label: '用过哪些loader和plugin', name: 'webpack'},
  {label: 'loader的执行顺序为什么是后写的先执行', name: 'webpack'},
  {label: 'webpack配置优化', name: 'webpack'},
  {label: 'webpack打包优化（happypack、dll）', name: 'webpack'},
  {label: 'plugin与loader的区别', name: 'webpack'},
  {label: 'webpack执行的过程', name: 'webpack'},
  {label: '如何编写一个loader、plugin', name: 'webpack'},
  {label: 'tree-shaking作用，如何才能生效', name: 'webpack'},
]

const PerformanceOptimizationAside: AsideItem[] = [
  {label: '首屏加载如何优化', name: 'home-page-optimization'},
  {label: '一个网页从请求到呈现花了很长时间，如何排查',},
]

const BackEndAndDevOpsAside: AsideItem[] = [
  {label: 'docker、k8s',},
  {label: '数据库、redis',},
  {label: 'nginx',},
  {label: 'GraphQL',},
  {label: 'serverless',},
]

const aside: AsideGroup[] = [
  {
    label: 'CSS',
    description: 'css基本上每个公司也都会问，但是问的不会很深，都是一些常见的问题。',
    children: CSSAside,
  },
  {
    label: '笔试题',
    description: '手写题每个公司都会有，范围也比较固定，如果之前好好准备的话，应该没什么问题。',
    children: WrittenExaminationAside,
  },
  {
    label: '框架（vue）',
    description: '因为我一直用的都是vue框架，所以问的也都是跟vue相关的。vue中的高频题也不外乎双向绑定、虚拟dom、diff算法这些。',
    children: VueAside,
  },
  {
    label: 'webpack',
    description: 'webpack也基本上成了必考的内容，一般会问是否配置过webpack、做过哪些优化之类的。',
    children: WebpackAside,
  },
  {
    label: 'ES6',
    description: '现在基本上都会使用ES6开发。ES6也成为了一个面试必考点。一般面试官都会问用过ES6的哪些新特性，再针对你所回答的进行深入的提问。',
    children: ES6Aside,
  },
  {
    label: '浏览器相关知识',
    description: '浏览器相关知识几乎是每个公司都会问到的考点，里面涉及的东西也比较多。其中缓存、http2、跨域必问。',
    children: BrowserAside,
  },
  {
    label: 'web安全',
    description: '一般我都会从xss和csrf说起。',
    children: WebSecurityAside,
  },
  {
    label: '事件循环',
    description: '事件循环绝对是一个必考题。其中涉及到宏任务、微任务、UI渲染等的执行顺序，浏览器端的必须要掌握，node端的有精力的最好也能掌握。',
    children: [
      {label: '事件循环', name: 'event-loop'},
    ],
  },
  {
    label: '框架（React）',
    children: [],
  },
  {
    label: '性能优化',
    children: PerformanceOptimizationAside,
  },
  {
    label: '后端与运维',
    children: BackEndAndDevOpsAside,
  },

]

export default aside
