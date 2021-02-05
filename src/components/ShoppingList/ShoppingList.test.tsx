import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingList, { EMPTY_STATE_TEST_ID, SHOPPING_LIST_CLEAR_BUTTON_TEST_ID } from "./ShoppingList";
import { createShoppingListItem, ShoppingListModel } from "../../models/ShoppingListItem";
import { CHECKBOX_TEST_ID, REMOVE_BUTTON_ID } from "../ShoppingListItem/ShoppingListItem";

const SAMPLE_SHOPPING_LIST: ShoppingListModel = [
  createShoppingListItem("eggs"),
  createShoppingListItem("bacon"),
  createShoppingListItem("toilet paper"),
];

describe("a shopping list with at no items", () => {
  test("it renders an empty state", () => {
    render(<ShoppingList shoppingList={[]} setShoppingList={() => {}} />);

    const emptyState = screen.getByTestId(EMPTY_STATE_TEST_ID);
    expect(emptyState).toBeInTheDocument();
  });
});

describe("an shopping list with at least one item", () => {
  test("it renders a list each with a checkbox and remove buttons", () => {
    render(<ShoppingList shoppingList={SAMPLE_SHOPPING_LIST} setShoppingList={() => {}} />);
    const listItemNames = [
      screen.getByText(/eggs/i),
      screen.getByText(/bacon/i),
      screen.getByText(/toilet paper/i),
    ];

    const listItemCheckBoxes = screen.getAllByTestId(CHECKBOX_TEST_ID);
    const listItemRemoveButtons = screen.getAllByTestId(REMOVE_BUTTON_ID);
    const listItemClearButton = screen.getByTestId(SHOPPING_LIST_CLEAR_BUTTON_TEST_ID);

    listItemNames.forEach((listItemName) => expect(listItemName).toBeInTheDocument());

    expect(listItemClearButton).toBeInTheDocument();

    expect(listItemCheckBoxes.length).toBe(3);
    expect(listItemRemoveButtons.length).toBe(3);
  });
});
