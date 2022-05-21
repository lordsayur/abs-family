<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import ALabel from "@/components/atoms/ALabel.vue";
import AInput from "@/components/atoms/AInput.vue";
import AInputRadio from "@/components/atoms/AInputRadio.vue";
import { useVModel } from "@vueuse/core";
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);

const data = useVModel(props, "modelValue", emit);

const inputType = computed(() =>
  useAttrs().type == "radio" ? AInputRadio : AInput
);
</script>

<template>
  <div class="mb-4">
    <ALabel :for="$attrs.id">{{ $attrs.label }}</ALabel>
    <component :is="inputType" v-bind="$attrs" v-model="data" />
  </div>
</template>
