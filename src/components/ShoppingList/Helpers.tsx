import { ShoppingListModel } from "../../models/ShoppingListItem";
import { updateShoppingListInLocalStorage } from "../../storage/shoppingList";

export function setShoppingListItemCompleted(
  shoppingListItemId: string,
  completed: boolean,
  shoppingList: ShoppingListModel,
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListModel>>,
): void {
  // Clone the shopping list
  const shoppingListToUpdate = [...shoppingList];

  const newShoppingList = shoppingListToUpdate.map((shoppingListItem) => {
    if (shoppingListItem.id === shoppingListItemId) {
      // This is a shallow clone and a potential source for bugs
      // if the shopping list item model changes to have
      // nested objects.
      return { ...shoppingListItem, completed };
    }

    return shoppingListItem;
  });

  setShoppingList(newShoppingList);
  updateShoppingListInLocalStorage(newShoppingList);
}

export function removeShoppingListItem(
  shoppingListItemId: string,
  shoppingList: ShoppingListModel,
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListModel>>,
): void {
  // eslint-disable-next-line arrow-body-style
  const newShoppingList = shoppingList.filter((shoppingListItem) => {
    return shoppingListItem.id !== shoppingListItemId;
  });

  setShoppingList(newShoppingList);
  updateShoppingListInLocalStorage(newShoppingList);
}

export default {};
