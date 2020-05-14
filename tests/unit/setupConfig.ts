import {config} from '@vue/test-utils';

// Stub global components:
if (config.stubs) {
  config.stubs.SvgIcon = true;
  config.stubs.formGroup = true;
}

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
