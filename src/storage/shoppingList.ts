import store from "store2";
import { ShoppingListModel } from "../models/ShoppingListItem";

export const SHOPPING_LIST_STORAGE_KEY = "shopping-list";

export function getShoppingListFromLocalStorage(): ShoppingListModel {
  return store.get(SHOPPING_LIST_STORAGE_KEY) as ShoppingListModel;
}

export function createShoppingListInLocalStorage(): void {
  store.set(SHOPPING_LIST_STORAGE_KEY, []);
}

export function updateShoppingListInLocalStorage(shoppingList: ShoppingListModel): void {
  store.set(SHOPPING_LIST_STORAGE_KEY, shoppingList);
}

export function shoppingListExistsInLocalStorage(): boolean {
  return store.has(SHOPPING_LIST_STORAGE_KEY);
}

export function initialiseShoppingListInLocalStorage(): ShoppingListModel {
  if (!shoppingListExistsInLocalStorage()) {
    createShoppingListInLocalStorage();
  }

  return getShoppingListFromLocalStorage();
}

export function clearShoppingListFromLocalStorage(): void {
  store.clear();
}
