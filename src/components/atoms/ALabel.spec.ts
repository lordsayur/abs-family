import { render, screen } from "@testing-library/vue";
import ALabel from "./ALabel.vue";

describe("ALabel", () => {
  it("should render label", () => {
    render(ALabel, { slots: { default: "My Label" } });

    expect(screen.queryByText("My Label")).toBeTruthy();
  });
});
