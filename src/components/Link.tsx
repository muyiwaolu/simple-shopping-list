import React from "react";

export function Link(props: {title: string; href: string}): JSX.Element {
  const { title, href } = props;
  return (
    <a
      className="dark:text-green-500 text-green-700 visited:text-green-500 hover:underline"
      href={href}
    >
      {title}
    </a>
  );
}

export function ButtonLink(props: { name: string; onClick: () => void}) : JSX.Element {
  const { name, onClick } = props;
  return (
    <button
      className="dark:text-green-500 text-green-700 hover:underline mb-2"
      type="button"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default {};
