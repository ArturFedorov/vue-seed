import {default as _Vue} from "vue";

declare module 'vuelidate-error-extractor' {
  export class singleErrorExtractorMixin extends _Vue {}

  export interface vuelidateErrorExtractor extends _Vue {
    i18n?: string
  }
}

declare const _default: {
  install(Vue: typeof _Vue, config: vuelidateErrorExtractor): void;
};

export default _default;
