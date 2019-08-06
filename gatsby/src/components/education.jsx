import React from "react";
import BackgroundPolygonComponent from "../components/background_polygon";


const PRASHANT_EDUCATION = {
  "institutes":[
     {
        "title":"University of Southern California",
        "link": "https://viterbischool.usc.edu/",
        "loc":"Los Angeles, CA",
        "course":"Masters in Computer Science",
        "desc":"Specialization in Human Language technology (Applied Artificial Intelligence)",
        "dates":"2008 - 2009"
     },
     {
        "title":"University of Waterloo",
        "link": "https://uwaterloo.ca/electrical-computer-engineering/",
        "loc":"Ontario, Canada",
        "course":"Bachelor in Applied Science – Computer Engineering (Honors)",
        "desc":"Option in Software Engineering",
        "dates":"2003 - 2008"
     }
  ]
}

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

    var education = PRASHANT_EDUCATION;
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
