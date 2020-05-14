import {shallowMount } from '@vue/test-utils';
import CustomFormGroup from '../CustomFormGroup.vue';

describe('CustomFormGroup.vue', () => {
  test('Renders data passed to slot', () => {
    const slotStub = 'Stub Text';
    const wrapper = shallowMount(CustomFormGroup, {
      slots: {
        default: slotStub
      }
    });
    expect(wrapper.text()).toBe(slotStub);
  });
});
