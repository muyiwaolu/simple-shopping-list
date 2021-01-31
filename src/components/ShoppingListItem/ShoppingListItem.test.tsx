import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingListItem, { ICON_CHECK_CIRCLE_ID } from "./ShoppingListItem";

describe("given a completed shopping list item", () => {
  test("it renders the expected name and icon", () => {
    render(<ShoppingListItem id="shopping-list-item-id" name="eggs" markShoppingListItemCompleted={() => {}} completed />);
    const listItemName = screen.getByText(/eggs/i);

    expect(listItemName).toBeInTheDocument();
  });
});

describe("given an incomplete shopping list item", () => {
  test("it renders the expected name and icon", () => {
    render(<ShoppingListItem id="shopping-list-item-id" name="milk" completed={false} markShoppingListItemCompleted={() => {}} />);
    const listItemName = screen.getByText(/milk/i);
    const listItemIcon = screen.getByTestId(ICON_CHECK_CIRCLE_ID);

    expect(listItemName).toBeInTheDocument();
    expect(listItemIcon).toBeInTheDocument();
  });
});
