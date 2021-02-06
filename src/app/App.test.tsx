import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { INPUT_ID, BUTTON_ID } from "../components/CreateShoppingListItemForm/CreateShoppingListItemForm";
import { CHECKBOX_TEST_ID, REMOVE_BUTTON_ID } from "../components/ShoppingListItem/ShoppingListItem";

beforeEach(() => localStorage.clear());

test("it renders an empty shopping list and a form to create list items", () => {
  render(<App />);

  // Form
  const emptyStateText = screen.getByText(/There are no items in your shopping list. Add one using the form above./i);
  const addItemButtonCta = screen.getByText(/Add item/i);

  expect(emptyStateText).toBeInTheDocument();
  expect(addItemButtonCta).toBeInTheDocument();
});
test("a new item can be added to the shopping list", () => {
  render(<App />);

  const addItemNameInput = screen.getByTestId(INPUT_ID);
  const addItemButton = screen.getByTestId(BUTTON_ID);

  userEvent.type(addItemNameInput, "Bread");
  userEvent.click(addItemButton);

  const shoppingListItems = screen.getAllByText(/Bread/i);
  const shoppingListItemIcons = screen.getAllByTestId(CHECKBOX_TEST_ID);

  expect(shoppingListItems).toHaveLength(1);
  expect(shoppingListItemIcons).toHaveLength(1);
  expect(addItemNameInput).toHaveValue("");
});

test("an individual item can be removed from the shopping list", () => {
  render(<App />);

  const addItemNameInput = screen.getByTestId(INPUT_ID);
  const addItemButton = screen.getByTestId(BUTTON_ID);

  userEvent.type(addItemNameInput, "Bread");
  userEvent.click(addItemButton);
  expect(addItemNameInput).toHaveValue("");

  userEvent.type(addItemNameInput, "Butter");
  userEvent.click(addItemButton);
  expect(addItemNameInput).toHaveValue("");

  const bread = screen.getByText(/Bread/i);
  const butter = screen.getByText(/Butter/i);

  expect(bread).toBeInTheDocument();
  expect(butter).toBeInTheDocument();

  const removeButtons = screen.getAllByTestId(REMOVE_BUTTON_ID);
  removeButtons.forEach((removeButton) => userEvent.click(removeButton));

  expect(bread).not.toBeInTheDocument();
  expect(butter).not.toBeInTheDocument();

  const emptyStateText = screen.getByText(/There are no items in your shopping list. Add one using the form above./i);

  expect(emptyStateText).toBeInTheDocument();
});
