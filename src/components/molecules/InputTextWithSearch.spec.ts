import { fireEvent, render, screen } from "@testing-library/vue";
import { ref } from "vue";
import InputTextWithSearch from "./InputTextWithSearch.vue";

const wrapperFactory = (args: any) => ({
  components: { InputTextWithSearch },
  setup() {
    const modelValue = ref("");
    return {
      args,
      modelValue,
    };
  },
  template: `
      <div>
        <InputTextWithSearch 
          v-bind="args" 
          v-model="modelValue"
          @option-click="modelValue = $event"
        />
      </div> 
      `,
});

describe("InputTextWithSearch", () => {
  it("should hide option when field is empty", () => {
    render(InputTextWithSearch, {
      props: {
        id: "search",
        label: "Search",
        modelValue: "",
        options: [{ id: 1, value: "Option 1" }],
      },
    });

    expect(screen.queryByText("Option 1")).toBeFalsy();
  });

  it("should show option if search match or partially match", async () => {
    render(
      wrapperFactory({
        id: "search",
        label: "Search",
        options: [
          { id: 1, value: "Option 1" },
          { id: 2, value: "Option 2" },
        ],
      })
    );

    const inputSearch = <HTMLInputElement>screen.getByLabelText("Search");
    await fireEvent.update(inputSearch, "1");

    expect(screen.queryAllByText(/Option/).length).toBe(1);
  });

  describe("on selecting option", () => {
    it("should set value to selected option", async () => {
      render(
        wrapperFactory({
          id: "search",
          label: "Search",
          options: [
            { id: 1, value: "Option 1" },
            { id: 2, value: "Option 2" },
          ],
        })
      );

      let inputSearch = <HTMLInputElement>screen.getByLabelText("Search");
      await fireEvent.update(inputSearch, "1");

      await fireEvent.click(<HTMLElement>screen.queryByText(/Option/));

      inputSearch = <HTMLInputElement>screen.getByLabelText("Search");
      expect(inputSearch.value).toBe("Option 1");
    });
    it("should clear search on click clear button", async () => {
      render(
        wrapperFactory({
          id: "search",
          label: "Search",
          options: [
            { id: 1, value: "Option 1" },
            { id: 2, value: "Option 2" },
          ],
        })
      );

      let inputSearch = <HTMLInputElement>screen.getByLabelText("Search");
      await fireEvent.update(inputSearch, "1");

      await fireEvent.click(<HTMLElement>screen.queryByText(/Option/));

      inputSearch = <HTMLInputElement>screen.getByLabelText("Search");

      await fireEvent.click(screen.getByRole("button"));

      expect(inputSearch.value).toBe("");
      expect(inputSearch.hasAttribute("disabled")).toBeFalsy();
    });
    it("should disable input search", async () => {
      render(
        wrapperFactory({
          id: "search",
          label: "Search",
          options: [
            { id: 1, value: "Option 1" },
            { id: 2, value: "Option 2" },
          ],
        })
      );

      let inputSearch = <HTMLInputElement>screen.getByLabelText("Search");
      await fireEvent.update(inputSearch, "1");

      await fireEvent.click(<HTMLElement>screen.queryByText(/Option/));

      inputSearch = <HTMLInputElement>screen.getByLabelText("Search");
      expect(inputSearch.hasAttribute("disabled")).toBeTruthy();
    });
  });
});
