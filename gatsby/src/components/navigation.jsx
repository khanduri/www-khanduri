

import React from "react";


export default function NavigationComponent(props){
  var navigation = [ "about", "learn", "experience", "education", "projects"];

  var rows = [];
  navigation.map(function(section, i){
    if (section != 'profile'){
      rows.push(<li key={'navigation_'+i} className="nav-item "><a className="ml-2 uppercase text-wide-2" href={"#"+section}>{section}</a></li>);
    }
  });

  return (
    <section className="navigation sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#"><i className="fa fa-home mr-2"></i>HOME</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav my-0 my-lg-0">
            { rows }
          </ul>
        </div>
      </nav>
    </section>
  )
}

