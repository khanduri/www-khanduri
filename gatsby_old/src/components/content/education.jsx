import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { EDUCATION } from "../constants/prashant";


function EducationDisplayComponent(props){
  
    var institute = props.items;
    return (
      <li className="timeline-inverted">
        <div className="timeline-badge bg-white"><i className="fa fa-graduation-cap"></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <div className="timeline-title"><a href={institute.link}>{ institute.title }</a></div>
            <div className="timeline-dates">{ institute.dates }</div>
            <div className="timeline-location">{ institute.loc }</div>
            <br/>
            <div className="timeline-course">{ institute.course }</div>
            <div className="timeline-body">{ institute.desc }</div>
          </div>
        </div>
      </li>
    )
}

export default function EducationComponent(props){
    var rows = [];

    var education = EDUCATION;
    education.institutes.map(function(institute, i){
      rows.push(<EducationDisplayComponent items={institute} key={"institution_" + i}/>);
    });

    return (
      <section id="education" className="content-section">
        <div className="py-3">
          <div className="container">
          {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
            
            <h2 className="text-center">Education</h2>
            <ul className="timeline">
              {rows}
            </ul>

          </div>
        </div>
      </section>
    )
}
