import React, { useEffect, useState } from "react";
import { ShoppingListModel } from "../../models/ShoppingListItem";
import { removeShoppingListItem, setShoppingListItemCompleted } from "../ShoppingList/Helpers";

export const CHECKBOX_TEST_ID = "shopping-list-item-checkbox";
export const REMOVE_BUTTON_ID = "shopping-list-item-remove";
interface ShoppingListItemProps {
  id: string;
  name: string;
  completed: boolean;
  shoppingList: ShoppingListModel;
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListModel>>;
}

export default function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const {
    id,
    name,
    completed,
    shoppingList,
    setShoppingList,
  } = props;

  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const variants = {
    completed: <del><span>{name}</span></del>,
    incomplete: <span>{name}</span>,
  };

  const checkboxName = `${CHECKBOX_TEST_ID}-${id}`;

  return (
    <li className="flex items-center justify-between w-full">
      <label htmlFor={CHECKBOX_TEST_ID} className="inline-block">
        <input
          name={checkboxName}
          className="mr-2"
          type="checkbox"
          data-testid={CHECKBOX_TEST_ID}
          defaultChecked={checked}
          onChange={(event) => {
            setShoppingListItemCompleted(
              id,
              event.target.checked,
              shoppingList,
              setShoppingList,
            );
            setChecked(event.target.checked);
          }}
        />
        {!completed && variants.incomplete}
        {completed && variants.completed}
      </label>
      <button
        type="button"
        className="ml-5 text-green-700 hover:underline"
        onClick={(event) => {
          event.preventDefault();
          removeShoppingListItem(id, shoppingList, setShoppingList);
        }}
      >
        <span
          role="img"
          aria-label="Trashcan"
          data-testid={REMOVE_BUTTON_ID}
        >
          🗑
        </span>
      </button>
    </li>
  );
}
