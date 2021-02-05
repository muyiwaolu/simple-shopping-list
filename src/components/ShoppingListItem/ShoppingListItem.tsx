import React, { useEffect, useState } from "react";

export const CHECKBOX_TEST_ID = "shopping-list-item-checkbox";
interface ShoppingListItemProps {
  id: string;
  name: string;
  completed: boolean;
  setShoppingListItemCompleted: (shoppingListItemId: string, completed: boolean) => void;
  removeShoppingListItem: (shoppingListItemId: string) => void;
}

export default function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const {
    id,
    name,
    completed,
    setShoppingListItemCompleted,
    removeShoppingListItem,
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
      <label htmlFor={CHECKBOX_TEST_ID}>
        <input
          name={checkboxName}
          className="mr-2"
          type="checkbox"
          data-testid={CHECKBOX_TEST_ID}
          defaultChecked={checked}
          onChange={(event) => {
            setShoppingListItemCompleted(id, event.target.checked);
            setChecked(event.target.checked);
          }}
        />
        {!completed && variants.incomplete}
        {completed && variants.completed}
      </label>
      <button
        type="button"
        className="ml-5 text-green-700"
        onClick={(event) => {
          event.preventDefault();
          removeShoppingListItem(id);
        }}
      >
        <span role="img" aria-label="Trashcan">🗑</span>
      </button>
    </li>
  );
}
