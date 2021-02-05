import React, { useState } from "react";
import { ShoppingListModel } from "../models/ShoppingListItem";
import GroceryList from "./GroceryList/GroceryList";

function App(): JSX.Element {
  const initialShoppingList: ShoppingListModel = [];
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  return (
    <GroceryList
      shoppingList={shoppingList}
      setShoppingList={setShoppingList}
    />
  );
}

export default App;
