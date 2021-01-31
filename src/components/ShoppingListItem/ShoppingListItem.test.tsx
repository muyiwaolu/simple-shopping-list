import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingListItem from "./ShoppingListItem";

describe("given a completed shopping list item", () => {
  test("it renders the expected name and icon", () => {
    render(<ShoppingListItem name="eggs" completed />);
    const listItemName = screen.getByText(/eggs/i);
    const listItemIcon = screen.getByText(/☑️/i);

    expect(listItemName).toBeInTheDocument();
    expect(listItemIcon).toBeInTheDocument();
  });
});

describe("given an incomplete shopping list item", () => {
  test("it renders the expected name and icon", () => {
    render(<ShoppingListItem name="milk" completed={false} />);
    const listItemName = screen.getByText(/milk/i);
    const listItemIcon = screen.getByText(/❌/i);

    expect(listItemName).toBeInTheDocument();
    expect(listItemIcon).toBeInTheDocument();
  });
});
