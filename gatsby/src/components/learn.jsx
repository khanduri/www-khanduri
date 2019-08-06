import React from "react";
import BackgroundPolygonComponent from "../components/background_polygon";


const PRASHANT_LEARN = {
  "current":{
     "languages":[
        [ "javascript", 80 ],
        [ "python", 90 ]
     ],
     "tools":[
        [ "vim", 90 ],
        [ "visual code", 70 ],
        [ "shell-scripting", 90 ]
     ],
     "frameworks":[
        [ "gatsby", 70 ],
        [ "react", 60 ],
        [ "react native", 60 ],
        [ "flask", 80 ]
     ]
  },
  "past":{
     "languages":[
        [ "C#", 70 ],
        [ "Java ", 70 ],
        [ "PHP", 50 ],
        [ "Perl", 40 ],
        [ "C / C++ ", 70 ],
        [ "Self", 60 ],
        [ "objective-c", 60 ]
     ],
     "tools":[
        [ "eclipse", 60 ],
        [ "x-code", 60 ],
        [ "visual-studio", 80 ]
     ],
     "frameworks":[
        [ "django", 80 ],
        [ "angular", 60 ],
        [ "yeoman", 60 ],
        [ "code-igniter", 50 ],
        [ "cake-php", 40 ],
        [ "mason", 50 ]
     ]
  }
}

function ProgressDisplayComponent(props){
    var title = props.title;
    var current = props.items;

   return (
      <div className="=">
        <h3 className="text-center">{title}</h3>
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

    var current = PRASHANT_LEARN.current;
    rows.push(<ProgressDisplayComponent key={"current_interest"} items={current} title={"Current interest"}/>);

    var past = PRASHANT_LEARN.past;
    rows.push(<ProgressDisplayComponent key={'past_interest'} items={past} title={"In the Past"}/>);

    return (
      <section id="learn" className="content-section highlight-primary-4">
        <div className="py-3">
            <div className="container">
              {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
              {rows}
            </div>
          </div>
      </section>
    )
}
