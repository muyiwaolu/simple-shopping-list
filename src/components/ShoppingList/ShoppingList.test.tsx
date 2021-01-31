import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";
import { createShoppingListItem, ShoppingListModel } from "../../models/ShoppingListItem";
import { ICON_CHECK_CIRCLE_ID } from "../ShoppingListItem/ShoppingListItem";

const SAMPLE_SHOPPING_LIST: ShoppingListModel = [
  createShoppingListItem("eggs"),
  createShoppingListItem("bacon"),
  createShoppingListItem("toilet paper"),
];

describe("an shopping list with at least one item", () => {
  test("it doesn't render a list", () => {
    render(<ShoppingList shoppingList={SAMPLE_SHOPPING_LIST} setShoppingList={() => {}} />);
    const listItemNames = [
      screen.getByText(/eggs/i),
      screen.getByText(/bacon/i),
      screen.getByText(/toilet paper/i),
    ];

    const listItemIcons = screen.getAllByTestId(ICON_CHECK_CIRCLE_ID);

    listItemNames.forEach((listItemName) => expect(listItemName).toBeInTheDocument());

    expect(listItemIcons.length).toBe(3);
  });
});
