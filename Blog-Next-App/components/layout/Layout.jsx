import { Fragment } from "react";
import Navbar from "./Navbar";
import React from "react";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
