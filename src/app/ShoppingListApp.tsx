import React, { useState } from "react";
import { ButtonLink, Link } from "../components/Link";
import CreateShoppingListItemForm from "../components/CreateShoppingListItemForm/CreateShoppingListItemForm";
import ShoppingList, { ShoppingListProps } from "../components/ShoppingList/ShoppingList";
import { updateShoppingListInLocalStorage } from "../storage/shoppingList";
import { DataStorageDisclosure, TroubleShootingHelp } from "./StaticContent";

function Header(): JSX.Element {
  return (
    <header className="text-2xl mb-4">
      Simple Shopping List
    </header>
  );
}

function Footer(): JSX.Element {
  const [showFullDataStorageDisclosure, setshowFullDataStorageDisclosure] = useState(false);
  const [showTroubleShootingHelp, setShowTroubleShootingHelp] = useState(false);

  return (
    <footer className="flex flex-col items-start py-4 md:w-1/3 md:mx-8 lg:w-1/2">
      <aside className="mb-2">
        <Link
          title="Fork me on Github"
          href="https://github.com/muyiwaolu/simple-shopping-list"
        />
      </aside>

      <ButtonLink
        name="How this website stores data"
        onClick={() => setshowFullDataStorageDisclosure(!showFullDataStorageDisclosure)}
      />
      {showFullDataStorageDisclosure && <DataStorageDisclosure />}

      <ButtonLink
        name="Troubleshooting"
        onClick={() => setShowTroubleShootingHelp(!showTroubleShootingHelp)}
      />

      {showTroubleShootingHelp && <TroubleShootingHelp />}
    </footer>
  );
}

export default function ShoppingListApp(props: ShoppingListProps): JSX.Element {
  const { shoppingList, setShoppingList } = props;
  return (
    <section className="container p-4 md:flex md:justify-between md:p-8">
      <div className="md:w-2/3 lg:w-1/2">
        <Header />
        <CreateShoppingListItemForm
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
          setShoppingListLocalStorage={updateShoppingListInLocalStorage}
        />
        <ShoppingList
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      </div>
      <Footer />
    </section>
  );
}
