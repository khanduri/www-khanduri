import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { EXPERIENCE } from "../constants/prashant";

function ExperienceDutyDisplayComponent(props) {
  var duty = props.items;
  return (
    <div className="ml-3 ">
      {" "}
      <i className="fa fa-caret-right "></i> {duty}
    </div>
  );
}

function ExperienceContentDisplayComponent(props) {
  var content = props.items;

  var rows = [];
  content.duties.map(function (duty, i) {
    rows.push(
      <ExperienceDutyDisplayComponent items={duty} key={"duty_" + i} />
    );
  });

  var team_name = "";
  if (content.team_name) {
    team_name = <span>{content.team_name} </span>;
  }

  return (
    <div className="timeline-body ">
      <div
        className="mt-4 mb-1 "
        style={{ color: "#333333", fontSize: "1.4em" }}
      >
        {team_name}
      </div>
      <div className="" style={{ color: "#666666" }}>
        {content.team_desc}
      </div>
      <div className="" style={{ color: "#999999" }}>
        {rows}
      </div>
    </div>
  );
}

function ExperienceDisplayComponent(props) {
  var work = props.items;

  var rows = [];
  work.body.map(function (content, i) {
    rows.push(
      <ExperienceContentDisplayComponent items={content} key={"content_" + i} />
    );
  });

  return (
    <li className="timeline-inverted">
      <div className="timeline-badge bg-white">
        {work.logo ? (
          <img
            className=""
            style={{ height: "40px", width: "40px" }}
            src={work.logo}
          ></img>
        ) : (
          <i className={work.fa_class}></i>
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <div className="timeline-title" style={{ fontSize: "2em" }}>
            <a className="link-inv" href={work.link}>
              {work.title}
            </a>
          </div>
          <div className="timeline-dates">{work.dates}</div>
          <div
            className="timeline-position"
            style={{ color: "#333333", fontSize: "1.6em" }}
          >
            {work.position}
          </div>
          {rows}
          <br className="" />
          <div className="timeline-location underline ">{work.loc}</div>
        </div>
      </div>
    </li>
  );
}

export default function ExperienceComponent(props) {
  var rows = [];

  var experiences = EXPERIENCE;
  experiences.map(function (experience, i) {
    rows.push(
      <ExperienceDisplayComponent items={experience} key={"experience_" + i} />
    );
  });

  return (
    <section id="experience" className="content-section ">
      <div className="py-3">
        <div className="container">
          {props.background_density !== undefined ? (
            <BackgroundPolygonComponent density={props.background_density} />
          ) : (
            ""
          )}

          <h2 className="text-center">Experience</h2>
          <ul className="timeline">{rows}</ul>
        </div>
      </div>
    </section>
  );
}
