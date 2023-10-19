import React from "react";
import NavComponent from "./NavComponent";
import styles from "../CSS/navbar.module.css";
import Left_nav from "./Left_nav";


function Navbar() {
  return (
    <div className={styles.nav}>
      <Left_nav />
      <div className={styles.nevigate}>
        <NavComponent page="home" />
        <NavComponent page="watch" />
        <NavComponent page="marketplace" />
        <NavComponent page=" " />
      </div>
      <div className="settings"></div>
    </div>
  );
}

export default Navbar;
