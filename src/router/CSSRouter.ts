import BoxModel from '../views/CSS/BoxModel.vue';
import VerticalCenter from '../views/CSS/VerticalCenter.vue';
import ThreeColumnsLayout from '../views/CSS/ThreeColumnsLayout.vue';
import CSSWeight from '../views/CSS/CSSWeight.vue';
import ClearFix from '../views/CSS/ClearFix.vue';
import Flex from '../views/CSS/Flex.vue';
import Position from '../views/CSS/Position.vue';
import FlexSquare from '../views/CSS/FlexSquare.vue';
import Triangle from '../views/CSS/Triangle.vue';
import BFC from '../views/CSS/BFC.vue';

const routes = [
  {
    path: '/css/box-model',
    name: 'box-model',
    component: BoxModel,
  },
  {
    path: '/css/vertical-center',
    name: 'vertical-center',
    component: VerticalCenter,
  },
  {
    path: '/css/three-columns-layout',
    name: 'three-columns-layout',
    component: ThreeColumnsLayout,
  },
  {
    path: '/css/css-weight',
    name: 'css-weight',
    component: CSSWeight,
  },
  {
    path: '/css/clear-fix',
    name: 'clear-fix',
    component: ClearFix,
  },
  {
    path: '/css/flex',
    name: 'flex',
    component: Flex,
  },
  {
    path: '/css/position',
    name: 'position',
    component: Position,
  },
  {
    path: '/css/flex-square',
    name: 'flex-square',
    component: FlexSquare,
  },
  {
    path: '/css/triangle',
    name: 'triangle',
    component: Triangle,
  },
  {
    path: '/css/BFC',
    name: 'BFC',
    component: BFC,
  },
];

export default routes;
