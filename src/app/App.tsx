import React, { useState } from "react";

import CreateShoppingListItemForm from "../components/CreateShoppingListItemForm/CreateShoppingListItemForm";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import { ShoppingListModel } from "../models/ShoppingListItem";

function App(): JSX.Element {
  const initialShoppingList: ShoppingListModel = [];
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  return (
    <div className="App">
      <ShoppingList shoppingList={shoppingList} />
      <CreateShoppingListItemForm
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}

export default App;
