import Vue from 'vue';
import store from '../src/store';
import {outerClick} from '../src/components/common/directives/outerClick';
import Vuelidate from 'vuelidate';
import vuelidateErrorExtractor from 'vuelidate-error-extractor';
import CustomFormGroup from '../src/components/common/CustomFormGroup/CustomFormGroup.vue';

Vue.component('router-link', {
  props: {
    tag: { type: String, default: 'a' }
  },
  render(createElement) {
    return createElement(this.tag, {attrs: {href: '#'}}, this.$slots.default)
  }
});

Vue.use(outerClick as any);

Vue.use(Vuelidate);
Vue.use(vuelidateErrorExtractor, {
  template: CustomFormGroup,
  i18n: 'validations'
});


export default (previewComponent: any) => {
  return {
    store,
    render(createElement: any) {
      return createElement(previewComponent)
    }
  }
}
