import React, { useEffect, useState } from "react";

export const CHECKBOX_TEST_ID = "shopping-list-item-checkbox";
interface ShoppingListItemProps {
  id: string;
  name: string;
  completed: boolean;
  setShoppingListItemCompleted: (shoppingListItemId: string, completed: boolean) => void;
}

export default function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const {
    id,
    name,
    completed,
    setShoppingListItemCompleted,
  } = props;

  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const variants = {
    completed: <del><span className="w-4/5">{name}</span></del>,
    incomplete: <span className="w-4/5">{name}</span>,
  };

  const checkboxName = `${CHECKBOX_TEST_ID}-${id}`;

  return (
    <li className="flex items-center w-screen">
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
    </li>
  );
}
