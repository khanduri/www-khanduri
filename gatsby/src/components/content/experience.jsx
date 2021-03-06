import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { EXPERIENCE } from "../constants/prashant";


function ExperienceDutyDisplayComponent(props){

    var duty = props.items;
    return (
      <div> - { duty }</div>
    )
}

function ExperienceContentDisplayComponent(props){

    var content = props.items;

    var rows = [];
    content.duties.map(function(duty, i){
      rows.push(<ExperienceDutyDisplayComponent items={duty} key={'duty_' + i}/>)
    });

    var team_name = "";
    if (content.team_name){ 
      team_name = <span>{content.team_name } :</span>;
    }

    return (
      <div className="timeline-body">
        <br/>
        <div>
        { team_name }
        </div>
        { content.team_desc }
        { rows }
      </div>
    )
}

function ExperienceDisplayComponent(props){
    var work = props.items;

    var rows = [];
    work.body.map(function(content, i){
      rows.push(<ExperienceContentDisplayComponent items={content} key={'content_' + i}/>);
    });

   return (
      <li className="timeline-inverted">
        <div className="timeline-badge bg-white"><i className={work.fa_class }></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h6 className="timeline-title"><a href={work.link}>{ work.title }</a></h6>
            <div className="timeline-location">{ work.loc }</div>
            <div className="timeline-dates">{ work.dates }</div>
            <div className="timeline-position"><b>{ work.position }</b></div>
            { rows }
          </div>
        </div>
      </li>

    )
}

export default function ExperienceComponent(props){
    var rows = [];

    var experiences = EXPERIENCE;
    experiences.map(function(experience, i){
      rows.push(<ExperienceDisplayComponent items={experience} key={'experience_' + i} />);
    });

    return (
      <section id="experience" className="content-section ">
        <div className="py-3">
            <div className="container">
            {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
              
              <h2 className="text-center">Experience</h2>
              <ul className="timeline">
                {rows}
              </ul>

            </div>
          </div>
      </section>
    )
}
