import React from "react";
import Social from "../reuse/social";
import { PROFILE } from "../constants/prashant";

export default function HeroComponent(props) {
  var profile = PROFILE;

  return (
    <div id="hero" className="landing-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="img-fluid "
              style={{ borderRadius: "50%" }}
              src="/images/prashant.jpg"
              alt=""
            />
          </div>
          <div className="col-md-9">
            <h1 className="display-3">
              {profile.name.first} {profile.name.last}
            </h1>
            <Social contact={profile.contact} />

            <hr className="my-5" />

            <p className="lead">{profile.desc.first}</p>
            <p>{profile.desc.second}</p>
            <div className="lead">
              <a className="my-3 btn btn-primary btn-lg" href="#about">
                {/* <div className="">↓</div> */}
                <div className="">⇩</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
