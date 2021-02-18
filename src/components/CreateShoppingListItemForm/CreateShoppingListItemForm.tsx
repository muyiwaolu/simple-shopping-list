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

  const validShoppingListItem = (nameToCheck = shoppingListItemName) => nameToCheck.length > 0
     && nameToCheck.length <= 30;

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
            dark:placeholder-gray-600
            ${userAttemptedToSubmitInvalidForm ? "border-red-500 dark:border-red-700" : ""}
          `}
          data-testid={INPUT_ID}
          type="text"
          value={shoppingListItemName}
          placeholder="eggs 🍳"
          onChange={(event) => {
            const newShoppingListItemName = event.target.value;
            setShoppingListItemName(newShoppingListItemName);
            if (validShoppingListItem(newShoppingListItemName)) {
              setUserAttemptedToSubmitInvalidForm(false);
            }
          }}
          onBlur={() => {
            if (validShoppingListItem()) {
              setUserAttemptedToSubmitInvalidForm(false);
            }
          }}
        />
        {userAttemptedToSubmitInvalidForm && (
        <span className="text-xs text-red-500">
          Item name must be between 1 and 30 characters.
        </span>
        )}
      </label>

      <button
        type="button"
        className="bg-green-700 rounded-md shadow text-white disabled:bg-gray-700 p-2 w-32 my-2"
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
