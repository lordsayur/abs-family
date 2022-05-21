import type { Story, Meta } from "@storybook/vue3";
import { userEvent, within } from "@storybook/testing-library";
import AButton from "./AButton.vue";

export default {
  title: "Atoms/AButton",
  component: AButton,
  argTypes: {
    onClick: {},
  },
} as Meta;

const Template: Story = (args) => ({
  components: { AButton },
  setup() {
    return { args };
  },
  template: `<AButton v-bind="args">${args.slotContent}</AButton>`,
});

export const Primary = Template.bind({});
Primary.args = {
  type: "submit",
  variant: "primary",
  slotContent: "Submit",
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(await canvas.findByText("Submit"));
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  variant: "secondary",
  slotContent: "Cancel",
};
