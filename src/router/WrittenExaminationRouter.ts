import DebounceAndThrottle from '../views/WrittenExamination/DebounceAndThrottle.vue';
import DeepClone from '../views/WrittenExamination/DeepClone.vue';
import Array from '../views/WrittenExamination/Array.vue';
import CallApplyBind from '../views/WrittenExamination/CallApplyBind.vue';
import EventEmitter from '../views/WrittenExamination/EventEmitter.vue';
import New from '../views/WrittenExamination/New.vue';
import Currying from '../views/WrittenExamination/Currying.vue';
import LazyMan from '../views/WrittenExamination/LazyMan.vue';
import Inherit from '../views/WrittenExamination/Inherit.vue';

const routes = [
  {
    path: '/written-examination/debounce-and-throttle',
    name: 'debounce-and-throttle',
    component: DebounceAndThrottle,
  },
  {
    path: '/written-examination/deep-clone',
    name: 'deep-clone',
    component: DeepClone,
  },
  {
    path: '/written-examination/array',
    name: 'array',
    component: Array,
  },
  {
    path: '/written-examination/call-apply-bind',
    name: 'call-apply-bind',
    component: CallApplyBind,
  },
  {
    path: '/written-examination/event-emitter',
    name: 'event-emitter',
    component: EventEmitter,
  },
  {
    path: '/written-examination/new',
    name: 'new',
    component: New,
  },
  {
    path: '/written-examination/currying',
    name: 'currying',
    component: Currying,
  },
  {
    path: '/written-examination/lazy-man',
    name: 'lazy-man',
    component: LazyMan,
  },
  {
    path: '/written-examination/inherit',
    name: 'inherit',
    component: Inherit,
  },
];

export default routes;
