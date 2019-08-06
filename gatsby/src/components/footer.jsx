import React from "react";
import BackgroundPolygonComponent from "../components/background_polygon";
import Social from '../components/social';

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

export default function FooterComponent(props){
  const profile = PRASHANT_PROFILE;
  const contact = profile.contact;

  return (
    <section className="footer content-section highlight-dark-10">
      <div className="py-3">
        <div className="container">
        {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
          
        <div className="fa-pull-right">
          <p className="text-white">Copyright &copy; { profile.name.first } { profile.name.last } - { new Date().getFullYear() }</p>
        </div>

        <Social contact={contact} />

        </div>
      </div>
    </section>
  )
}
