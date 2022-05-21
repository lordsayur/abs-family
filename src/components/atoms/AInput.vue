<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: null,
  },
  error: {
    type: Boolean,
    required: false,
    default: false,
  },
  errorMessage: {
    type: String,
    required: false,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);

const data = useVModel(props, "modelValue", emit);
</script>

<template>
  <input
    v-bind="$attrs"
    v-model="data"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  <p v-if="error" class="text-red-500 text-xs italic">
    {{ errorMessage }}
  </p>
</template>
