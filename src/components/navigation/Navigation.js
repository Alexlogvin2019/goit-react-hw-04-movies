import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
