import React from "react";
// import logo from "../../../public/logo2.png"

// import DrawerToggleButton from "../sidedrawer/drawerToggleButton";
import "./nav.css";


function Nav() {
  return (
    // <div>

    //   <nav>

    //   </nav>

    // </div>

    <div className="topnav">
      {/* <img alt="" src="%PUBLIC_URL%/logo3.png"></img> */}
      <a className="active" href="/">Home</a>
      {/* <a href="#news">News</a> */}
      <a href="/contact">Contact</a>
      <a href="/login">Dashboard</a>
    </div>

  );
}


export default Nav;
