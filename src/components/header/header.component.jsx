import React from "react";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import { useStyles } from "./header.styles";

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <ul className={classes.container}>
        <li>
          <Link to="/contacts">
            <img src={"./assets/wezom-logo.svg"} alt="Wezom" />
          </Link>
        </li>
        {routes.map((route) => {
          return (
            <li key={route.name}>
              <Link to={route.route}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
