import React, { useState } from "react";
import { createShoppingListItem, ShoppingListModel } from "../../models/ShoppingListItem";

export const INPUT_ID = "create-shopping-list-item-input";
export const BUTTON_ID = "create-shopping-list-item-button";

interface CreateShoppingListItemFormProps {
  shoppingList: ShoppingListModel;
  setShoppingList: (shoppingList: ShoppingListModel) => void;
  setShoppingListLocalStorage: (shoppingList: ShoppingListModel) => void;
}

export default function CreateShoppingListItemForm(
  props: CreateShoppingListItemFormProps,
): JSX.Element {
  const { shoppingList, setShoppingList, setShoppingListLocalStorage } = props;

  const [shoppingListItemName, setShoppingListItemName] = useState("");

  const addShoppingListItem = () => {
    const newShoppingListItem = createShoppingListItem(shoppingListItemName);
    const newShoppingList = [...shoppingList, newShoppingListItem];

    setShoppingList(newShoppingList);
    setShoppingListLocalStorage(newShoppingList);

    setShoppingListItemName("");
  };

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      addShoppingListItem();
    }}
    >
      <label htmlFor={INPUT_ID} className="flex flex-col">
        <span className="mb-2 text-gray-700">Item name</span>
        <input
          name={INPUT_ID}
          className="border mr-2 rounded-md p-2"
          data-testid={INPUT_ID}
          type="text"
          value={shoppingListItemName}
          placeholder="eggs"
          onChange={(event) => {
            setShoppingListItemName(event.target.value);
          }}
        />
      </label>
      <button
        type="button"
        className="bg-green-700 rounded-md shadow-md p-2 my-5 text-white disabled:bg-gray-700"
        data-testid={BUTTON_ID}
        onClick={() => addShoppingListItem()}
        disabled={shoppingListItemName.length === 0}
      >
        Add item
      </button>
    </form>
  );
}
