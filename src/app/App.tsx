import React, { useState } from "react";

import CreateShoppingListItemForm from "../components/CreateShoppingListItemForm/CreateShoppingListItemForm";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import { ShoppingListModel } from "../models/ShoppingListItem";

function App(): JSX.Element {
  const initialShoppingList: ShoppingListModel = [];
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  return (
    <div className="container mt-2 px-4 lg:px0">
      <header className="text-2xl mb-2">
        Simple shopping list
      </header>
      <CreateShoppingListItemForm
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <ShoppingList shoppingList={shoppingList} />
    </div>
  );
}

export default App;
