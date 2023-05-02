import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left_navbar}>
        <p>Abhaya's Blog</p>
      </div>
      <div className={classes.right_navbar}>
        <ul className="">
          <li>Home</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
