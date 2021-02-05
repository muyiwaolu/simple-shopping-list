import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingListItem, { CHECKBOX_TEST_ID, REMOVE_BUTTON_ID } from "./ShoppingListItem";

describe("given a completed shopping list item", () => {
  test("it renders the expected name and icon", () => {
    render(
      <ShoppingListItem
        id="shopping-list-item-id"
        name="eggs"
        shoppingList={[]}
        setShoppingList={() => {}}
        completed
      />,
    );
    const listItemName = screen.getByText(/eggs/i);
    const listItemCheckbox = screen.getByTestId(CHECKBOX_TEST_ID);
    const listItemRemoveLink = screen.getByTestId(REMOVE_BUTTON_ID);

    expect(listItemName).toBeInTheDocument();
    expect(listItemRemoveLink).toBeInTheDocument();
    expect(listItemCheckbox).toBeChecked();
  });
});

describe("given an incomplete shopping list item", () => {
  test("it renders the expected name, checkbox, and removal prompt", () => {
    render(
      <ShoppingListItem
        id="shopping-list-item-id"
        name="milk"
        completed={false}
        shoppingList={[]}
        setShoppingList={() => {}}
      />,
    );
    const listItemName = screen.getByText(/milk/i);
    const listItemCheckbox = screen.getByTestId(CHECKBOX_TEST_ID);
    const listItemRemoveLink = screen.getByTestId(REMOVE_BUTTON_ID);

    expect(listItemName).toBeInTheDocument();
    expect(listItemRemoveLink).toBeInTheDocument();
    expect(listItemCheckbox).not.toBeChecked();
  });
});
