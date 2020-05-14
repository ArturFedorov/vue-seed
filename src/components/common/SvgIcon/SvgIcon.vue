<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <title v-if="title">{{ title }}</title>
    <use :href="iconPath"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: ''
    },

    width: {
      type: [String, Number],
      required: false
    },

    height: {
      type: [String, Number],
      required: false
    }
  },

  computed: {
    iconPath(): string {
      try {
        return require(`@/assets/icons/${this.name}.svg`).default.url;
      } catch (ex) {
        return '';
      }
    },

    className(): string {
      return 'svg-icon svg-icon-' + this.name;
    }
  },

  watch: {
    name() {
      /*
      * We need this because otherwise shadowDOM isn't updated
      */
      this.$el.innerHTML = `<use xlink:href="${this.iconPath}"/>`;
    }
  }
});
</script>

<style lang="scss" scoped>
  .svg-icon {
    transition: fill .3s ease-in-out;
  }
</style>
