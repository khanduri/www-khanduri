import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { EDUCATION } from "../constants/prashant";

function EducationDisplayComponent(props) {
  var institute = props.items;
  return (
    <li className="timeline-inverted">
      <div className="timeline-badge bg-white">
        {institute.logo ? (
          <img
            className=""
            style={{ height: "50px", width: "50px" }}
            src={institute.logo}
          ></img>
        ) : (
          <i className="fa fa-graduation-cap"></i>
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <a href={institute.link}>
            {/* <img className="" style={{height: '100px', width: '100px', }} src={institute.logo}></img> */}
          </a>

          <div
            className="timeline-title"
            style={{ fontSize: "1.4em", color: "#333333" }}
          >
            <a href={institute.link}>{institute.title}</a>
          </div>
          <div className="timeline-dates">{institute.dates}</div>
          {/* <br/> */}
          <div
            className="timeline-course my-2"
            style={{ fontSize: "1.3em", color: "#666666" }}
          >
            {institute.course}
          </div>
          <div
            className="timeline-body"
            style={{ fontSize: "1.0em", color: "#999999" }}
          >
            {institute.desc}
          </div>
          <div className="timeline-location underline mt-3">
            {institute.loc}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function EducationComponent(props) {
  var rows = [];

  var education = EDUCATION;
  education.institutes.map(function (institute, i) {
    rows.push(
      <EducationDisplayComponent items={institute} key={"institution_" + i} />
    );
  });

  return (
    <section id="education" className="content-section">
      <div className="py-3">
        <div className="container">
          {props.background_density !== undefined ? (
            <BackgroundPolygonComponent density={props.background_density} />
          ) : (
            ""
          )}

          <h2 className="text-center">Education</h2>
          <ul className="timeline">{rows}</ul>
        </div>
      </div>
    </section>
  );
}
