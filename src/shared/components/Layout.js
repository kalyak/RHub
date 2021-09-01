import React from "react";
import NavigationBar from "./NavigationBar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <main className="m-5 pt-4 ">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
