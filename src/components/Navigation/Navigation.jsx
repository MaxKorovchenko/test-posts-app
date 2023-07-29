import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink to="/posts" className={styles.link}>
        Posts
      </NavLink>
    </nav>
  );
};
