import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import Social from '../reuse/social';
import { PROFILE } from "../constants/prashant";


export default function FooterComponent(props){
  const profile = PROFILE;
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
