import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const routes = [
    {
      path: `/`,
      title: `Placeholder`,
    },
  ];

  const routesMap = () => {
    return routes.map((route) => (
      <AniLink
        key={route.path}
        to={route.path}
        paintDrip
        hex="0076c2"
        activeClassName="active"
        duration={0.5}
      >
        {route.title}
      </AniLink>
    ));
  };

  return (
    <header className="flex justify-between p-4 bg-blue-400">
      <AniLink
        to="/"
        paintDrip
        hex="0076c2"
        activeClassName="active"
        duration={0.5}
      >
        Home
      </AniLink>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`${
          expanded ? "bg-blue-300 opened shadow-md" : ""
        } bg-green flex items-center p-2 rounded md:hidden focus:outline-none transition-colors duration-200 ease-in-out menu`}
      >
        <svg className="w-6 h-6" viewBox="0 0 100 100">
          <title>Menu</title>
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <nav
        className={`${
          expanded ? `block` : `hidden`
        } md:flex w-full md:w-auto md:items-center`}
      >
        {routesMap()}
      </nav>
    </header>
  );
}
