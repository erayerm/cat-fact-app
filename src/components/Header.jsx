import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  return (
    <div className="flex gap-10 text-xl">
      <NavLink
        className="px-5 py-2"
        exact
        to="/"
        activeClassName="bg-white text-custom-blue"
      >
        Random
      </NavLink>
      <NavLink
        className="px-5 py-2"
        to="/favorites"
        activeClassName="bg-white text-custom-blue"
      >
        Favorites
      </NavLink>
    </div>
  );
}
