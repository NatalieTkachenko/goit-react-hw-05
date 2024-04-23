// === Lib modules ===
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <NavLink className={styles.menuItem} to="/">
        Home
      </NavLink>
      <NavLink className={styles.menuItem} to="/movies">
        Movies
      </NavLink>
    </>
  );
}
