import { fireEvent, render, screen } from "@testing-library/vue";
import AInput from "./AInput.vue";
import { Default, WithError, WithPopulatedData } from "./AInput.stories";

describe("AInput", () => {
  it("should has correct placeholder when supplied via props", () => {
    render(AInput, { props: { placeholder: "Nazir" } });

    const inputText = <HTMLInputElement>screen.getByPlaceholderText("Nazir");

    expect(inputText.getAttribute("placeholder")).toBe("Nazir");
  });

  it("should able to update input field", async () => {
    render(AInput, { props: Default.args });

    const inputText = <HTMLInputElement>(
      screen.getByPlaceholderText(Default?.args?.placeholder)
    );

    await fireEvent.update(inputText, "Bilal");

    expect(inputText.value).toBe("Bilal");
  });

  it("should has value populated by default", () => {
    render(AInput, { props: WithPopulatedData.args });

    const inputText = <HTMLInputElement>(
      screen.getByPlaceholderText(WithPopulatedData?.args?.placeholder)
    );

    expect(inputText.value).toBe(WithPopulatedData?.args?.modelValue);
  });

  it("should display error message", () => {
    render(AInput, { props: WithError.args });

    expect(screen.queryByText(WithError?.args?.errorMessage)).toBeTruthy();
  });
});
