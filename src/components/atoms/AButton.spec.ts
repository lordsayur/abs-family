import { render, screen } from "@testing-library/vue";
import AButton from "./AButton.vue";
import { Primary, Secondary } from "./AButton.stories";

describe("AButton", () => {
  it.each([
    ["primary", Primary.args, Primary?.args?.slotContent, "bg-teal-500"],
    [
      "secondary",
      Secondary.args,
      Primary?.args?.slotContent,
      "border-transparent",
    ],
  ])("renders %s button", async (_, props, defaultSlot, expectedCssClass) => {
    render(AButton, {
      props,
      slots: { default: defaultSlot },
    });

    const button = screen.getByText(defaultSlot);

    expect(button.classList.contains(expectedCssClass)).toBeTruthy();
  });
});
