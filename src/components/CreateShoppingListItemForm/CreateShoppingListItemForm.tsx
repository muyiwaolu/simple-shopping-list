import React, { useEffect, useState } from "react";
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
  const [userAttemptedToSubmitInvalidForm, setUserAttemptedToSubmitInvalidForm] = useState(false);

  useEffect(() => {
    setUserAttemptedToSubmitInvalidForm(false);
  }, []);

  const validShoppingListItem = () => shoppingListItemName.length > 0
     && shoppingListItemName.length <= 30;

  const addShoppingListItem = () => {
    if (!validShoppingListItem()) {
      return;
    }

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
        <span className="text-xs mb-2 text-gray-700 dark:text-white">Item name</span>
        <input
          name={INPUT_ID}
          className={`
            border mr-2 rounded-md p-2 dark:bg-black
            dark:placeholder-white dark:border-green-700
            ${userAttemptedToSubmitInvalidForm ? "border-red-500" : ""}
          `}
          data-testid={INPUT_ID}
          type="text"
          value={shoppingListItemName}
          placeholder="eggs 🍳"
          onChange={(event) => {
            setShoppingListItemName(event.target.value);
            if (validShoppingListItem()) {
              setUserAttemptedToSubmitInvalidForm(false);
            }
          }}
          onBlur={() => {
            if (validShoppingListItem()) {
              setUserAttemptedToSubmitInvalidForm(false);
            }
          }}
        />
      </label>
      {userAttemptedToSubmitInvalidForm && (
      <span className="text-xs text-red-500">
        Item name must be between 1 and 30 characters.
      </span>
      )}
      <button
        type="button"
        className="bg-green-700 rounded-md shadow p-2 my-5 text-white disabled:bg-gray-700"
        data-testid={BUTTON_ID}
        onClick={() => {
          if (!validShoppingListItem()) {
            setUserAttemptedToSubmitInvalidForm(true);
            return;
          }
          addShoppingListItem();
        }}
        disabled={userAttemptedToSubmitInvalidForm}
      >
        Add item
      </button>
    </form>
  );
}
