import type { Story, Meta } from "@storybook/vue3";
import { ref } from "vue";
import AInputRadio from "./AInputRadio.vue";

export default {
  title: "Atoms/AInputRadio",
  component: AInputRadio,
  argTypes: {
    "onUpdate:modelValue": {},
  },
} as Meta;

const Template: Story = (args) => ({
  components: { AInputRadio },
  setup() {
    const modelValue = ref(args.modelValue);
    return { args, modelValue };
  },
  template: `
  <div>
    <AInputRadio name="gender" v-bind="args" v-model="modelValue"/>
    <p>model value: {{modelValue}}</p>
  </div>
  `,
});

const options = [
  {
    label: "Male",
    value: "1",
  },

  {
    label: "Female",
    value: "2",
  },
];

export const Default = Template.bind({});
Default.args = {
  name: "gender",
  options,
};

export const WithPopulatedData = Template.bind({});
WithPopulatedData.args = {
  name: "gender",
  modelValue: "2",
  options,
};

export const WithError = Template.bind({});
WithError.args = {
  name: "gender",
  options,
  error: true,
  errorMessage: "This field is required",
};
