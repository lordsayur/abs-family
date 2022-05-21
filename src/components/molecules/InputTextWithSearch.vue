<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";

import InputWithLabel from "@/components/molecules/InputWithLabel.vue";
import type { optionType } from "./InputTextWithSearch";
import { useVModel } from "@vueuse/core";

type stateType = "searching" | "optionSelected";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: null,
  },
  options: {
    type: Array as PropType<optionType[]>,
    required: true,
    default: () => [{ id: 1, value: "option 1" }],
  },
});
const emit = defineEmits(["optionClick", "update:modelValue"]);

const data = useVModel(props, "modelValue", emit);

const options = computed<optionType[]>(() => {
  return props.options.filter(searchInput);
});

const state = ref<stateType>("searching");

function handleOptionClick(option: string) {
  state.value = "optionSelected";
  emit("optionClick", option);
}

function handleClear() {
  state.value = "searching";
  emit("optionClick", null);
}

function searchInput(element: optionType, index: number, array: optionType[]) {
  if (!props.modelValue) return false;

  return (
    element.value?.toLowerCase().includes(props.modelValue.toLowerCase()) ??
    false
  );
}
</script>

<template>
  <InputWithLabel
    v-bind="$attrs"
    v-model="data"
    :disabled="state == 'optionSelected'"
  />
  <button v-show="state == 'optionSelected'" @click="handleClear">❌</button>
  <section v-show="state == 'searching'">
    <div
      v-for="option in options"
      :key="option.id"
      @click="handleOptionClick(option.value)"
    >
      <slot name="option" :option="option">{{ option.value }}</slot>
    </div>
  </section>
</template>
