import { ref } from "vue";
import type { Story, Meta } from "@storybook/vue3";
import InputTextWithSearch from "./InputTextWithSearch.vue";
import InputWithLabel from "./InputWithLabel.vue";

export default {
  title: "Molecules/InputTextWithSearch",
  component: InputTextWithSearch,
  argTypes: {},
} as Meta;

const Template: Story = (args) => ({
  components: { InputTextWithSearch, InputWithLabel },
  setup() {
    const modelValue = args.modelValue ?? ref(null);
    return { args, modelValue };
  },
  template:
    args.template ??
    `
      <div>
        <InputTextWithSearch 
          v-bind="args" 
          v-model="modelValue"
          @option-click="modelValue = $event"
          />
        <p>modelValue: {{modelValue}}</p>
      </div> 
      `,
});

export const Default = Template.bind({});
Default.args = {
  id: "father",
  label: "Father",
  placeholder: "Search Name...",
};

export const WithCustomOptionSlot = Template.bind({});
WithCustomOptionSlot.args = {
  template: `
  <InputTextWithSearch 
    v-bind="args" 
    v-model="modelValue" 
    @option-click="modelValue = $event"
  > 
    <template #option="{option}">
      {{option.value}}
    </template>
  </InputTextWithSearch>
  <p>modelValue: {{modelValue}}</p>
  `,
  id: "father",
  label: "Father",
  placeholder: "Search Name...",
  options: [{ id: 1, value: "Haji Bilal" }],
};
