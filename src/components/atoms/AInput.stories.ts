import { ref } from "vue";
import type { Story, Meta } from "@storybook/vue3";
import AInput from "./AInput.vue";

export default {
  title: "Atoms/AInput",
  component: AInput,
  argTypes: {
    "onUpdate:modelValue": {},
  },
} as Meta;

const Template: Story = (args) => ({
  components: { AInput },
  setup() {
    const modelValue = ref(args.modelValue);
    return { args, modelValue };
  },
  template: `
  <div>
    <AInput v-bind="args" v-model="modelValue"/>
    <p>model value: {{modelValue}}</p>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: "full-name",
  placeholder: "Nazir Mubin",
};

export const WithPopulatedData = Template.bind({});
WithPopulatedData.args = {
  id: "full-name",
  placeholder: "Nazir Mubin",
  modelValue: "Bilal",
};

export const WithError = Template.bind({});
WithError.args = {
  id: "full-name",
  placeholder: "Nazir Mubin",
  error: true,
  errorMessage: "This field is required",
};
