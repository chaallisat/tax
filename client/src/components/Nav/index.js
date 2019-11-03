import React from "react";

// import DrawerToggleButton from "../sidedrawer/drawerToggleButton";
import "./nav.css";


function Nav() {
  return (
    <div>

    <ul itemID="slide-out" className="sidenav">
      <li>
        <div className="user-view">

          <div className="background light-blue darken-1">
            <img alt="" src=""></img>
          </div>
          <a href="/home"><img className="circle" alt="" src=""></img></a>
          <a href="#name"><span className="white-text name">Loranda Tax Service</span></a>
        </div>
      </li>

      <li>Links Examples</li>
      <li><a href="https://www.linkedin.com/in/chaa-llisa-taylor-50bba5183/"><i className="fa fa-linkedin"></i>Linkedin</a></li>

      <li>
        <div className="divider"></div>
      </li>

      <li><a className="waves-effect" href="contact.html">Contact</a></li>

    </ul>

    <div className="test">
          <a href="#" data-target="slide-out" className="sidenav-trigger btn-floating pulse green darken-2"><i className="material-icons">LTS</i></a>
        </div>

    </div>
  );
}


export default Nav;
