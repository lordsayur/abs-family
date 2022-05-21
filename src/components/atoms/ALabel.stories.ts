import type { Story, Meta } from "@storybook/vue3";
import ALabel from "./ALabel.vue";

export default {
  title: "Atoms/ALabel",
  component: ALabel,
} as Meta;

const Template: Story = (args) => ({
  components: { ALabel },
  setup() {
    return { args };
  },
  template: `<ALabel v-bind="args">Full Name</ALabel>`,
});

export const Main = Template.bind({});
Main.args = {
  for: "full-name",
};
