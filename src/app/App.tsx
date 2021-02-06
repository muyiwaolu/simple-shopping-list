import React, { useState } from "react";
import { ShoppingListModel } from "../models/ShoppingListItem";
import { initialiseShoppingListInLocalStorage } from "../storage/shoppingList";
import ShoppingListApp from "./ShoppingListApp";

function App(): JSX.Element {
  // TODO: Initial grocery could fail? Maybe introduce a graceful fallback.
  const initialShoppingList: ShoppingListModel = initialiseShoppingListInLocalStorage();
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  return (
    <ShoppingListApp
      shoppingList={shoppingList}
      setShoppingList={setShoppingList}
    />
  );
}

export default App;
