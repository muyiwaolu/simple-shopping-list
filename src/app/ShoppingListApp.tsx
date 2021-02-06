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

  const fullDataStorageDisclosure = (
    <div>
      <ButtonLink
        name="Show less"
        onClick={() => setshowFullDataStorageDisclosure(false)}
      />
      <DataStorageDisclosure />
    </div>
  );

  const troubleShootingHelp = (
    <div>
      <ButtonLink
        name="Show less"
        onClick={() => setShowTroubleShootingHelp(false)}
      />
      <TroubleShootingHelp />
    </div>
  );

  return (
    <footer className="flex flex-col items-start">
      <aside className="mb-2">
        <Link
          title="Fork me on Github"
          href="https://github.com/muyiwaolu/simple-shopping-list"
        />
      </aside>
      {!showFullDataStorageDisclosure && (
        <ButtonLink
          name="How this website stores data"
          onClick={() => setshowFullDataStorageDisclosure(true)}
        />
      )}
      {showFullDataStorageDisclosure && fullDataStorageDisclosure}
      {!showTroubleShootingHelp && (
        <ButtonLink
          name="Troubleshooting"
          onClick={() => setShowTroubleShootingHelp(true)}
        />
      )}
      {showTroubleShootingHelp && troubleShootingHelp}
    </footer>
  );
}

export default function ShoppingListApp(props: ShoppingListProps): JSX.Element {
  const { shoppingList, setShoppingList } = props;
  return (
    <section className="container my-4 px-4 lg:px0">
      <div>
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
      <hr className="my-2" />
      <Footer />
    </section>
  );
}
