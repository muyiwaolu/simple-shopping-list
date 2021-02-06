import React from "react";

export function Link(props: {title: string; href: string}): JSX.Element {
  const { title, href } = props;
  return (
    <a
      className="text-green-700 hover:underline"
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
      className="text-green-700 hover:underline mb-2"
      type="button"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default {};
