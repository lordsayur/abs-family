import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomeView from "./HomeView.vue";

describe("HomeView", () => {
  it("should display title", () => {
    render(HomeView);
    screen.getAllByRole("heading", { name: "عائلة بدرية الصالحين" });
  });
});
