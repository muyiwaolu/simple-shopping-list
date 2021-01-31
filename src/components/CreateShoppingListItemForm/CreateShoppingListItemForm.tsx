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
  return (
    <form>
      <label htmlFor={INPUT_ID}>
        Item name
        <input
          id={INPUT_ID}
          data-testid={INPUT_ID}
          type="text"
          value={shoppingListItemName}
          onChange={(event) => {
            setShoppingListItemName(event.target.value);
          }}
        />
      </label>
      <button
        type="button"
        data-testid={BUTTON_ID}
        onClick={() => {
          const newShoppingListItem = createShoppingListItem(shoppingListItemName);
          const newShoppingList = [...shoppingList, newShoppingListItem];

          setShoppingList(newShoppingList);
        }}
      >
        Add item
      </button>
    </form>
  );
}
