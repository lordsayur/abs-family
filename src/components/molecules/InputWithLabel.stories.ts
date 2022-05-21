import { ref } from "vue";
import type { Story, Meta } from "@storybook/vue3";
import InputWithLabel from "./InputWithLabel.vue";

export default {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
  argTypes: {
    "onUpdate:modelValue": {},
  },
} as Meta;

const Template: Story = (args) => ({
  components: { InputWithLabel },
  setup() {
    const modelValue = ref(null);
    return { args, modelValue };
  },
  template: `
  <div>
    <InputWithLabel name="gender" v-bind="args" v-model="modelValue"/>
    <p>model value: {{modelValue}}</p>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: "full-name",
  label: "Full Name",
  placeholder: "Nazir Mubin",
};

export const Radio = Template.bind({});
Radio.args = {
  id: "full-name",
  label: "Gender",
  type: "radio",
  options: [
    { label: "👨🏽", value: 1 },
    { label: "👩🏽", value: 2 },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  id: "full-name",
  label: "Full Name",
  placeholder: "Nazir Mubin",
  error: true,
  errorMessage: "Full Name is Required",
};
