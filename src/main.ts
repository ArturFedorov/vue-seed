import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/styles.scss';
import './components/common/index';
import svg4everybody from 'svg4everybody';
import Vuelidate from 'vuelidate';
import vuelidateErrorExtractor from 'vuelidate-error-extractor';
import CustomFormGroup from '@/components/common/CustomFormGroup/CustomFormGroup.vue';

Vue.use(Vuelidate);

Vue.use(vuelidateErrorExtractor, {
  template: CustomFormGroup,
  i18n: 'validations'
});

svg4everybody();

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


