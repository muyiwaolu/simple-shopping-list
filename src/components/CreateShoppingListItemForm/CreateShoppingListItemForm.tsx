import React, { useState } from "react";
import { createShoppingListItem, ShoppingListModel } from "../../models/ShoppingListItem";

export const INPUT_ID = "create-shopping-list-item-input";
export const BUTTON_ID = "create-shopping-list-item-button";

interface CreateShoppingListItemFormProps {
  shoppingList: ShoppingListModel;
  setShoppingList: (shoppingList: ShoppingListModel) => void;
}

export default function CreateShoppingListItemForm(
  props: CreateShoppingListItemFormProps,
): JSX.Element {
  const { shoppingList, setShoppingList } = props;

  const [shoppingListItemName, setShoppingListItemName] = useState("");

  const addShoppingListItem = () => {
    const newShoppingListItem = createShoppingListItem(shoppingListItemName);
    const newShoppingList = [...shoppingList, newShoppingListItem];

    setShoppingList(newShoppingList);

    // TODO: test this behaviour
    setShoppingListItemName("");
  };

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      addShoppingListItem();
    }}
    >
      <input
        id={INPUT_ID}
        className="border mr-1 mb-5 rounded-md"
        data-testid={INPUT_ID}
        type="text"
        value={shoppingListItemName}
        placeholder="eggs"
        onChange={(event) => {
          setShoppingListItemName(event.target.value);
        }}
      />
      <button
        type="button"
        className="bg-green-700 rounded-md shadow-md p-1 text-white"
        data-testid={BUTTON_ID}
        onClick={() => addShoppingListItem()}
      >
        Add item
      </button>
    </form>
  );
}
