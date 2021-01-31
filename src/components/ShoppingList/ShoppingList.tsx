import React from "react";
import { ShoppingListModel } from "../../models/ShoppingListItem";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

interface ShoppingListProps {
  shoppingList: ShoppingListModel;
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListModel>>;
}

function EmptyState() {
  return (
    <div>
      There are currently no items in your shopping list. Add one using the form above.
    </div>
  );
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
  const { shoppingList, setShoppingList } = props;

  if (shoppingList.length === 0) {
    return <EmptyState />;
  }

  const markShoppingListItemCompleted = (shoppingListItemId: string) => {
    // Clone the shopping list
    const shoppingListToUpdate = [...shoppingList];

    const newShoppingList = shoppingListToUpdate.map((shoppingListItem) => {
      if (shoppingListItem.id === shoppingListItemId) {
        // This is a shallow clone and a potential source for bugs
        // if the shopping list item model changes to have
        // nested objects.
        return { ...shoppingListItem, completed: true };
      }

      return shoppingListItem;
    });

    setShoppingList(newShoppingList);
  };

  return (
    <div>
      {shoppingList
        .sort()
        .map(({ id, name, completed }) => (
          <ShoppingListItem
            key={id}
            id={id}
            name={name}
            completed={completed}
            markShoppingListItemCompleted={markShoppingListItemCompleted}
          />
        ))}
    </div>
  );
}
