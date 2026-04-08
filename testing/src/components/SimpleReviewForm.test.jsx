import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { SimpleReviewForm } from "./SimpleReviewForm";

describe("SimpleReviewForm", () => {
  //   afterEach(() => {
  //     cleanup();
  //   });

  it("shows an error if name is empty", async () => {
    const user = userEvent.setup();
    render(<SimpleReviewForm />);

    const button = screen.getByRole("button", { name: /submit/i });
    await user.click(button);

    expect(screen.getByText("Name is required")).toBeInTheDocument;
  });

  it("shows successful message with a valid name", async () => {
    const user = userEvent.setup();
    render(<SimpleReviewForm />);

    const input = screen.getByLabelText(/name/i);
    const button = screen.getByRole("button", { name: /submit/i });

    await user.type(input, "Nathan");
    await user.click(button);

    expect(screen.getByText("Submitted for Nathan")).toBeInTheDocument();
  });
});
