import React from "react";
import { NAVIGATION } from "../constants/prashant";

export default function NavigationComponent(props) {
  var navigation = NAVIGATION;

  var rows = [];
  navigation.map(function (section, i) {
    if (section != "profile") {
      rows.push(
        // <li key={"navigation_" + i} className="nav-item mx-2">
        //   <a
        //     className="text-light link-inv mx-2 uppercase text-wide-2"
        //     href={"#" + section}
        //   >
        //     {section}
        //   </a>
        // </li>

        <li key={"navigation_" + i} >
          <a href={"#" + section} className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            {section}
          </a>
      </li>
      );
    }
  });

  return (
    <section id="nav" className="sticky-top  ">

      <nav className="bg-primary ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a href="#top" className="text-white flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HOME</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="uppercase font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {rows}
            </ul>
          </div>
        </div>
      </nav>


      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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

        <div className="navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav my-0 my-lg-0">{rows}</ul>
        </div>
      </nav> */}
    </section>
  );
}
