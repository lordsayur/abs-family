import { render, screen } from "@testing-library/vue";
import { Default, Radio, WithError } from "./InputWithLabel.stories";
import InputWithLabel from "./InputWithLabel.vue";

describe("InputWithLabel", () => {
  it("should render label", () => {
    render(InputWithLabel, { props: { label: "My Label" } });

    expect(screen.queryByText("My Label")).toBeTruthy();
  });

  it('should has same value for "for" attribute as id supplied via props', () => {
    render(InputWithLabel, {
      props: { label: "My Label", id: "my-field" },
    });

    expect(screen.getByText("My Label").getAttribute("for")).toBe("my-field");
  });

  it("should render input by default", () => {
    render(InputWithLabel, {
      props: Default.args,
    });

    expect(screen.queryByPlaceholderText("Nazir Mubin")).toBeTruthy();
  });

  it("should render input of type radio", () => {
    render(InputWithLabel, {
      props: Radio.args,
    });

    expect(screen.queryByLabelText(Radio?.args?.options[0].label)).toBeTruthy();
  });

  it("should display error message", () => {
    render(InputWithLabel, {
      props: WithError.args,
    });

    expect(screen.queryByText(WithError?.args?.errorMessage)).toBeTruthy();
  });
});
