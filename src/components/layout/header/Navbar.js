import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import style from "./Navbar.module.css";
import { ReactComponent as Dropdown } from "./dropdown-menu.svg";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  
  const dropdownHandler = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };
  
  const navVisible = <Nav onClick={dropdownHandler} className={`${style.nav}`}/>;
  const navInvisible = <Nav className={`${style.nav} ${style.invisible}`}/>;

  return (
    <header className={style.header}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link to="/">My Portfolio</Link>
          <Dropdown
            onClick={dropdownHandler}
            className={style["dropdown-arrow"]}
            title="Dropdown Arrow"
          />
        </div>
        {collapsed ? navInvisible : navVisible}
      </div>
    </header>
  );
}

export default Navbar;
