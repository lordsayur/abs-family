<script setup lang="ts">
import { computed, type PropType } from "vue";
import { variantTypeEnum, type variantType } from "./AButton";

const props = defineProps({
  variant: {
    type: String as PropType<variantType>,
    required: false,
    default: "primary",
  },
});

const classes = computed(() => {
  return {
    "flex-shrink-0": true,
    "py-1": true,
    "px-2": true,
    rounded: true,
    "border-4": true,
    "text-sm": true,
    "bg-teal-500": props.variant == variantTypeEnum.PRIMARY,
    "hover:bg-teal-700": props.variant == variantTypeEnum.PRIMARY,
    "border-teal-500": props.variant == variantTypeEnum.PRIMARY,
    "hover:border-teal-700": props.variant == variantTypeEnum.PRIMARY,
    "text-white": props.variant == variantTypeEnum.PRIMARY,
    "border-transparent": props.variant == variantTypeEnum.SECONDARY,
    "text-teal-500": props.variant == variantTypeEnum.SECONDARY,
    "hover:text-teal-800": props.variant == variantTypeEnum.SECONDARY,
  };
});
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
