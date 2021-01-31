import React from "react";
import { render, screen } from "@testing-library/react";
import CreateShoppingListItemForm, { BUTTON_ID, INPUT_ID } from "./CreateShoppingListItemForm";

test("it renders the form", () => {
  render(<CreateShoppingListItemForm shoppingList={[]} setShoppingList={() => {}} />);
  const itemNameLabel = screen.getByTestId(INPUT_ID);
  const buttonCta = screen.getByTestId(BUTTON_ID);

  expect(itemNameLabel).toBeInTheDocument();
  expect(buttonCta).toBeInTheDocument();
});
