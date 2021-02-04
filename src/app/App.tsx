import React, { useState } from "react";
import { ShoppingListModel } from "../models/ShoppingListItem";
import GroceryList from "./GroceryList/GroceryList";

function App(): JSX.Element {
  const initialShoppingList: ShoppingListModel = [];
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  return (
    <div className="container mt-2 px-4 lg:px0">
      <GroceryList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}

export default App;
