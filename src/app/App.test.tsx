import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { INPUT_ID, BUTTON_ID } from "../components/CreateShoppingListItemForm/CreateShoppingListItemForm";

test("it renders an empty shopping list and a form to create list items", () => {
  render(<App />);

  // Form
  const addItemNameLabel = screen.getByText(/Item name/i);
  const addItemButtonCta = screen.getByText(/Add item/i);
  expect(addItemNameLabel).toBeInTheDocument();
  expect(addItemButtonCta).toBeInTheDocument();
});
test("a new item can be added to the shopping list", () => {
  render(<App />);

  const addItemNameInput = screen.getByTestId(INPUT_ID);
  const addItemButton = screen.getByTestId(BUTTON_ID);

  userEvent.type(addItemNameInput, "Bread");
  userEvent.click(addItemButton);

  const shoppingListItems = screen.getAllByText(/Bread/i);
  const shoppingListItemIcons = screen.getAllByText(/❌/i);

  expect(shoppingListItems).toHaveLength(1);
  expect(shoppingListItemIcons).toHaveLength(1);
});
