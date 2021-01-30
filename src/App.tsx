import { v4 as uuidv4 } from "uuid";

import "./App.css";

interface ShoppingListItem {
  id: string;
  name: string;
  completed: boolean;
}

function createShoppingListItem(name: string): ShoppingListItem {
  return {
    id: uuidv4(),
    name,
    // eslint-disable-next-line sort-keys
    completed: false,
  };
}
const SAMPLE_SHOPPING_LIST: ShoppingListItem[] = [
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

interface ShoppingListItemListItemProps {
  name: string,
  completed: boolean
}

function ShoppingListItemListItem(props: ShoppingListItemListItemProps): JSX.Element {
  const { name, completed } = props;
  return (
    <div>
      {name}
      {" "}
      <ShoppingListItemCompletedIndicator completed={completed} />
    </div>
  );
}

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        {
          SAMPLE_SHOPPING_LIST.map(({ id, name, completed }) => (
            <ShoppingListItemListItem
              key={id}
              name={name}
              completed={completed}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
