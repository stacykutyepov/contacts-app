import React from "react";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.name}>
              <Link to={route.route}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
