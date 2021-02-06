import React from "react";
import { ShoppingListModel } from "../../models/ShoppingListItem";
import { clearShoppingListFromLocalStorage } from "../../storage/shoppingList";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

export const EMPTY_STATE_TEST_ID = "empty-shopping-list";
export const SHOPPING_LIST_CLEAR_BUTTON_TEST_ID = "shopping-list-clear-button";

function EmptyState() {
  return (
    <aside data-testid={EMPTY_STATE_TEST_ID}>
      There are no items in your shopping list. Add one using the form above.
    </aside>
  );
}

function ShoppingListClear(props: ShoppingListProps): JSX.Element | null {
  const { shoppingList, setShoppingList } = props;

  if (shoppingList.length === 0) {
    return null;
  }

  return (
    <button
      type="button"
      className="bg-green-700 rounded-md shadow-md p-2 text-white disabled:bg-gray-700 my-5"
      data-testid={SHOPPING_LIST_CLEAR_BUTTON_TEST_ID}
      onClick={() => {
        setShoppingList([]);
        clearShoppingListFromLocalStorage();
      }}
    >
      Clear
    </button>
  );
}

export interface ShoppingListProps {
  shoppingList: ShoppingListModel;
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListModel>>;
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
  const { shoppingList, setShoppingList } = props;

  if (shoppingList.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <ul>
        {shoppingList
          .sort()
          .map(({ id, name, completed }) => (
            <ShoppingListItem
              key={id}
              id={id}
              name={name}
              completed={completed}
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
            />
          ))}
      </ul>
      <ShoppingListClear
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}
