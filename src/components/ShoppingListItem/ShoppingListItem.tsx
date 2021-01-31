import React from "react";

interface ShoppingListItemProps {
  name: string;
  completed: boolean;
}

function IconCheckCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 text-green-700">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const { name, completed } = props;
  const incompleteIndicator = completed ? null : <IconCheckCircle />;
  return (
    <div className="flex items-center w-1">
      <span className="mr-1">{name}</span>
      <button
        type="button"
        onClick={}
      >
        { incompleteIndicator }
      </button>
    </div>
  );
}
