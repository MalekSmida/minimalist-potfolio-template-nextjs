import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Home Page Component", () => {
  test("renders the page component without errors", () => {
    render(<Page />);
    expect(screen.getByRole("main")).toBeDefined();
  });
});
