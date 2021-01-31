import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

interface ShoppingListItemModel {
  id: string;
  name: string;
  completed: boolean;
}

type ShoppingListModel = ShoppingListItemModel[];

function createShoppingListItem(name: string): ShoppingListItemModel {
  return {
    id: uuidv4(),
    name,
    // eslint-disable-next-line sort-keys
    completed: false,
  };
}
const SAMPLE_SHOPPING_LIST: ShoppingListModel = [
  createShoppingListItem("eggs"),
  createShoppingListItem("bacon"),
  createShoppingListItem("toilet paper"),
];

function ShoppingListItemCompletedIndicator(props: {completed: boolean}): JSX.Element {
  const { completed } = props;
  const indicator = completed ? "☑️" : "❌";
  return (
    <span>{indicator}</span>
  );
}

interface ShoppingListItemProps {
  name: string,
  completed: boolean
}

function ShoppingListItem(props: ShoppingListItemProps): JSX.Element {
  const { name, completed } = props;
  return (
    <div>
      {name}
      {" "}
      <ShoppingListItemCompletedIndicator completed={completed} />
    </div>
  );
}

interface CreateShoppingListItemFormProps {
  shoppingList: ShoppingListModel;
  setShoppingList: (shoppingList: ShoppingListModel) => void;
}

function CreateShoppingListItemForm(props: CreateShoppingListItemFormProps): JSX.Element {
  const { shoppingList, setShoppingList } = props;

  const [shoppingListItemName, setShoppingListItemName] = useState("");

  const inputId = "create-shopping-list-item-input";
  return (
    <form>
      <label htmlFor={inputId}>
        Item name
        <input
          id={inputId}
          type="text"
          value={shoppingListItemName}
          onChange={(event) => {
            setShoppingListItemName(event.target.value);
          }}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          const newShoppingListItem = createShoppingListItem(shoppingListItemName);
          const newShoppingList = [...shoppingList, newShoppingListItem];

          setShoppingList(newShoppingList);
        }}
      >
        Add item
      </button>
    </form>
  );
}

interface ShoppingListProps {
  shoppingList: ShoppingListModel
}

function ShoppingList(props: ShoppingListProps): JSX.Element {
  const { shoppingList } = props;
  return (
    <div>
      {shoppingList.map(({ id, name, completed }) => (
        <ShoppingListItem
          key={id}
          name={name}
          completed={completed}
        />
      ))}
    </div>
  );
}

function App(): JSX.Element {
  const [shoppingList, setShoppingList] = useState(SAMPLE_SHOPPING_LIST);
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
