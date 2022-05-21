import { fireEvent, render, screen } from "@testing-library/vue";
import { Default, WithPopulatedData, WithError } from "./AInputRadio.stories";
import AInputRadio from "./AInputRadio.vue";

describe("AInputRadio", () => {
  it("should display correct options", () => {
    render(AInputRadio, { props: { options: [{ label: "Male", value: 1 }] } });

    expect(screen.queryByText("Male")).toBeTruthy();
  });

  it("should has correct name when supplied via props", () => {
    render(AInputRadio, {
      props: { name: "gender", options: [{ label: "Male", value: 1 }] },
    });

    const inputRadio = <HTMLInputElement>screen.getByLabelText("Male");

    expect(inputRadio.getAttribute("name")).toBe("gender");
  });

  it("should able to update input field", async () => {
    render(AInputRadio, { props: Default.args });

    const inputRadio = <HTMLInputElement>(
      screen.getByLabelText(Default?.args?.options[0].label)
    );

    await fireEvent.click(inputRadio);

    expect(inputRadio.checked).toBeTruthy();
  });

  it("should has value populated by default", () => {
    render(AInputRadio, { props: WithPopulatedData.args });

    const inputRadio = <HTMLInputElement>(
      screen.getByLabelText(WithPopulatedData?.args?.options[1].label)
    );

    expect(inputRadio.checked).toBeTruthy();
  });

  it("should display error message", () => {
    render(AInputRadio, { props: WithError.args });

    expect(screen.queryByText(WithError?.args?.errorMessage)).toBeTruthy();
  });
});
