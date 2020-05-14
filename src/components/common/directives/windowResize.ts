import Vue from 'vue';
import {IDirectiveOptionsExtended} from './IDirectiveOptionsExtended';

export const windowResize: IDirectiveOptionsExtended = Vue.directive('windowResize', {
  fn: undefined as EventListenerOrEventListenerObject | undefined,
  inserted(el, binding) {
    const fn: EventListenerOrEventListenerObject = evt => {
      if (binding.value(evt, el)) {
        window.removeEventListener('resize', fn);
      }
    };
    windowResize.fn = fn;
    window.addEventListener('resize', fn);
  },

  unbind() {
    if (windowResize.fn) {
      window.removeEventListener('resize', windowResize.fn);
    }
  }
} as IDirectiveOptionsExtended);
