<template>
  <div
    class="form-group"
    :class="{ 'form-group-invalid': hasErrors }">

    <!-- @slot Slot for input field and additional content -->
    <slot />

    <div
      class="form-errors"
      v-if="hasErrors">
      <div
        class="form-error"
        v-for="error in activeErrorMessages"
        :key="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

export default Vue.extend({
  name: 'formGroup',

  props: {
    /**
     * Input field's name for error text
     */
    name: {
      type: String,
      default: ''
    }
  },

  mixins: [singleErrorExtractorMixin]
});
</script>
