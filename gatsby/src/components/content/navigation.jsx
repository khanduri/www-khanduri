import React from "react";
import { NAVIGATION } from "../constants/prashant";

export default function NavigationComponent(props) {
  var navigation = NAVIGATION;

  var rows = [];
  navigation.map(function (section, i) {
    if (section != "profile") {
      rows.push(
        <li key={"navigation_" + i} className="nav-item mx-2">
          <a
            className="text-light link-inv mx-2 uppercase text-wide-2"
            href={"#" + section}
          >
            {section}
          </a>
        </li>
      );
    }
  });

  return (
    <section id="nav" className="navigation sticky-top  ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand text-light" href="#top">
          <i className="fa fa-home mr-2"></i>HOME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav my-0 my-lg-0">{rows}</ul>
        </div>
      </nav>
    </section>
  );
}
