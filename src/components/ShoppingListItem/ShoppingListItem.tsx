import React from "react";

interface ShoppingListItemProps {
  name: string;
  completed: boolean;
}

function ShoppingListItemCompletedIndicator(props: {completed: boolean}): JSX.Element {
  const { completed } = props;
  const indicator = completed ? "☑️" : "❌";
  return (
    <span>{indicator}</span>
  );
}

export default function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const { name, completed } = props;
  return (
    <div>
      {name}
      {" "}
      <ShoppingListItemCompletedIndicator completed={completed} />
    </div>
  );
}
