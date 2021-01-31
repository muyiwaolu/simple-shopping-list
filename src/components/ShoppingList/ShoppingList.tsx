import React from "react";
import { ShoppingListModel } from "../../models/ShoppingListItem";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

interface ShoppingListProps {
  shoppingList: ShoppingListModel;
}

function EmptyState() {
  return (
    <div>
      There are currently no items in your shopping list. Add one using the form above.
    </div>
  );
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
  const { shoppingList } = props;

  if (shoppingList.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      {shoppingList
        .sort()
        .map(({ id, name, completed }) => (
          <ShoppingListItem
            key={id}
            name={name}
            completed={completed}
          />
        ))}
    </div>
  );
}
