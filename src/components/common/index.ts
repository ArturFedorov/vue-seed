import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';

// Local Directives
import {outerClick} from './directives/outerClick';
import {windowResize} from './directives/windowResize';

const components: { [key: string]: {} } = {
  SvgIcon
};

const directives: { [key: string]: {} } = {
  outerClick,
  windowResize
};

Object.keys(components)
  .forEach(componentName => Vue.component(componentName, components[componentName]));

Object.keys(directives)
  .forEach(directiveName => Vue.directive(directiveName, directives[directiveName]));
