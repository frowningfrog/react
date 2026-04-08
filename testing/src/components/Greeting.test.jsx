import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Test Greeting Component", () => {
  it("renders the heading text", async () => {
    const user = userEvent.setup();

    render(<Greeting />);
    expect(screen.queryByText("greetings programs")).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: /greeting/i });

    await user.click(button);
    expect(screen.queryByText("greetings programs")).toBeInTheDocument();

    await user.click(button);
    expect(screen.queryByText("greetings programs")).not.toBeInTheDocument();
  });
});
