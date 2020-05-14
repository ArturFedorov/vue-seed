import {DirectiveOptions} from 'vue';

export interface IDirectiveOptionsExtended extends DirectiveOptions {
  fn?: EventListenerOrEventListenerObject;
}
