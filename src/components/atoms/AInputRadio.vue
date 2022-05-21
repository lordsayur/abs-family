<script lang="ts">
import { useVModel } from "@vueuse/core";
import type { PropType } from "vue";
import type { radioOptionType } from "./AInputRadio";

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: null,
  },
  options: {
    type: Array as PropType<radioOptionType[]>,
    required: true,
    default: () => [{ label: "Yes", value: 1 }],
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
  <div
    v-for="option in options"
    :key="option.value"
    class="form-check form-check-inline"
  >
    <input
      v-bind="$attrs"
      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      type="radio"
      :id="option.value"
      :value="option.value"
      v-model="data"
    />
    <label
      class="form-check-label inline-block text-gray-800"
      :for="option.value"
    >
      {{ option.label }}
    </label>
  </div>
  <p v-if="error" class="text-red-500 text-xs italic">
    {{ errorMessage }}
  </p>
</template>
