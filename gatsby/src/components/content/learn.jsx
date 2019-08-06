import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { LEARN } from "../constants/prashant";


function ProgressDisplayComponent(props){
    var title = props.title;
    var current = props.items;

   return (
      <div className="my-4">
        <h2 className="text-center">{title}</h2>
        <div className="row">
            { Object.keys(current).map(function(category, i){
              return (
                <div key={'category_'+i} className="col-md-4"><div className="">{category.toUpperCase()}</div><br/>
                  {current[category].sort(function(a, b){ return -(a[1] - b[1]); }).map(function(topic, i){
                    return (
                      <div key={'progress_'+i} className="progress my-2">
                        <div className={"progress-bar bg-primary"} style={{width: topic[1]+"%"}}>{topic[0]}</div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
        </div>
      </div>
    )
}
// 

export default function LearnComponent(props){
    var rows = [];

    var current = LEARN.current;
    rows.push(<ProgressDisplayComponent key={"current_interest"} items={current} title={"Current interest"}/>);

    var past = LEARN.past;
    rows.push(<ProgressDisplayComponent key={'past_interest'} items={past} title={"In the Past"}/>);

    return (
      <section id="learn" className="content-section">
        <div className="py-3">
            <div className="container">
              {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
              {rows}
            </div>
          </div>
      </section>
    )
}
