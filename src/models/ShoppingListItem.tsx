import { v4 as uuidv4 } from "uuid";

interface ShoppingListItemModel {
  id: string;
  name: string;
  completed: boolean;
}

export type ShoppingListModel = ShoppingListItemModel[];

export function createShoppingListItem(name: string): ShoppingListItemModel {
  return {
    id: uuidv4(),
    name,
    // eslint-disable-next-line sort-keys
    completed: false,
  };
}

export default ShoppingListItemModel;
