import React from "react";
import { ShoppingListModel } from "../../models/ShoppingListItem";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

interface ShoppingListProps {
  shoppingList: ShoppingListModel;
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
  const { shoppingList } = props;
  return (
    <div>
      {shoppingList.map(({ id, name, completed }) => (
        <ShoppingListItem
          key={id}
          name={name}
          completed={completed}
        />
      ))}
    </div>
  );
}
