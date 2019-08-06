import React from "react";
import Social from '../reuse/social';


const PRASHANT_PROFILE = {
  "name":{
     "first":"Prashant",
     "last":"Khanduri"
  },
  "desc":{
     "first":"Solutions Architect - Runner - Tennis Enthusiast",
     "second":"Currently in New Delhi, India"
  },
  "contact":{
    "github":"khanduri",
    "twitter":"khandurip",
    "linkedin":"prashantkhanduri",
    "facebook":"prashant.khanduri"
 }
}

export default function HeroComponent(props){
  var profile = PRASHANT_PROFILE;

    return (
      <div className="landing-container">

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="img-fluid rounded" src="/images/prashant.jpg" alt=""/>
            </div>
            <div className="col-md-9">
              <h1 className="display-3">{ profile.name.first } { profile.name.last }</h1>
              <Social contact={profile.contact} />

              <hr className="my-2"/>

              <p className="lead">{ profile.desc.first }</p>
              <p>{ profile.desc.second }</p>
              
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#about" ><i className="fa fa-angle-double-down animated"></i></a>
              </p>

              
            </div>
          </div>
        </div>

      </div>
    )
}
