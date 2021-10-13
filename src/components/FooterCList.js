import React from "react";

function FooterCList({ title, list }) {
  return (
    <section className="px-3">
      <h1 className="text-gray-500 sm:text-base py-1 uppercase">{title}</h1>
      <ul>
        {list.map((link) => (
          <li className="text-xs py-2 cursor-pointer hover:underline">
            {link}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FooterCList;
