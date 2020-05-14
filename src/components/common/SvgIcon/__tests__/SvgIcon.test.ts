import { shallowMount, mount } from '@vue/test-utils';
import SvgIcon from '../SvgIcon.vue';

describe('SvgIcon.vue', () => {
  const selectors = {
    title: 'title'
  };

  const defaultPropsData = {
    name: 'tick',
    width: '10',
    height: '10',
    title: 'tick'
  };

  function mountComponent(propsData = defaultPropsData as any) {
    return shallowMount(SvgIcon, {
      propsData
    });
  }

  describe('Adds attributes and values according to props', () => {
    test('sets string props correctly', () => {
      const wrapper = mountComponent();
      expect(wrapper.find(selectors.title).exists()).toBe(true);
      expect(wrapper.find(selectors.title).text()).toBe('tick');
      expect(wrapper.attributes().width).toBe('10');
      expect(wrapper.attributes().height).toBe('10');
    });

    test('sets number props correctly', () => {
      const wrapper = mountComponent({
        name: 'tick',
        width: 10,
        height: 10
      });
      expect(wrapper.attributes().width).toBe('10');
      expect(wrapper.attributes().height).toBe('10');
    });
  });

  test('Renders correctly', () => {
    const wrapper = mountComponent();
    expect(wrapper.element).toMatchSnapshot();
  });
});
