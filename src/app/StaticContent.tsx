import React from "react";
import { Link } from "../components/Link";

export function DataStorageDisclosure(): JSX.Element {
  return (
    <div className="py-2">
      <p>
        This website does not use cookies or share your data with third-parties
        in any way.
      </p>
      <p>
        The details of your shopping list are stored in your
        browser&apos;s
        {" "}
        <Link
          title="local storage"
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
        />
        .
      </p>
      <p>
        If you want to remove the data stored in local storage, use the &quot;Clear&quot; button
        when an item has been added to the list.
      </p>
    </div>
  );
}

export function TroubleShootingHelp(): JSX.Element {
  return (
    <div>
      <p>
        Ensure you are using a modern browser that
        {" "}
        <Link
          title="supports local storage"
          href="https://caniuse.com/mdn-api_window_localstorage"
        />
        .
      </p>
      <p className="mt-2">
        If data isn&apos;t being persisted when you refresh the page, it&apos;s
        most likely because of the amount of data you&apos;re trying to add. This application is
        designed to support simple shopping list items and can handle multiple thousands of items
        easily on modern browsers.
      </p>
    </div>
  );
}

export default {};
