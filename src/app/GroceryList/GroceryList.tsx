import React from "react";
import CreateShoppingListItemForm from "../../components/CreateShoppingListItemForm/CreateShoppingListItemForm";
import ShoppingList, { ShoppingListProps } from "../../components/ShoppingList/ShoppingList";

export default function GroceryList(props: ShoppingListProps): JSX.Element {
  const { shoppingList, setShoppingList } = props;
  return (
    <section className="container mt-2 px-4 lg:px0">
      <header className="text-2xl my-4">
        <span role="img" aria-label="Trolley">🛒</span>
        {" "}
        Groceries
      </header>
      <CreateShoppingListItemForm
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </section>
  );
}
