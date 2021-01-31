import React from "react";

export const ICON_CHECK_CIRCLE_ID = "icon-check-circle";
interface ShoppingListItemProps {
  id: string;
  name: string;
  completed: boolean;
  markShoppingListItemCompleted: (shoppingListItemId: string) => void;
}

function IconCheckCircle() {
  return (
    <svg data-testid={ICON_CHECK_CIRCLE_ID} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 text-green-700">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const {
    id,
    name,
    completed,
    markShoppingListItemCompleted,
  } = props;

  const incompleteIndicator = completed ? null : <IconCheckCircle />;
  return (
    <div className="flex items-center w-1">
      {!completed && <span className="mr-1">{name}</span>}
      {completed && <del><span>{name}</span></del>}
      <button
        type="button"
        onClick={() => markShoppingListItemCompleted(id)}
      >
        { incompleteIndicator }
      </button>
    </div>
  );
}
