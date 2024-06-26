import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { LEARN } from "../constants/prashant";

function ProgressDisplayComponent(props) {
  var title = props.title;
  var current = props.items;

  return (
    <div className="my-4">
      <h5 className="text-center my-5">{title}</h5>
      <div className="row">
        {Object.keys(current).map(function (category, i) {
          return (
            <div key={"category_" + i} className="col-md-4">
              <div className="">{category.toUpperCase()}</div>
              <br />
              {current[category]
                .sort(function (a, b) {
                  return -(a[1] - b[1]);
                })
                .map(function (topic, i) {
                  return (
                    <div key={"progress_" + i} className="progress my-2">
                      <div
                        className={"progress-bar bg-primary text-light"}
                        style={{ width: topic[1] + "%" }}
                      >
                        {topic[0]}
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
//

export default function LearnComponent(props) {
  var rows = [];

  var current = LEARN.current;
  rows.push(
    <ProgressDisplayComponent
      key={"current_interest"}
      items={current}
      title={"Current"}
    />
  );

  var past = LEARN.past;
  rows.push(
    <ProgressDisplayComponent
      key={"past_interest"}
      items={past}
      title={"Past"}
    />
  );

  return (
    <section id="skills" className="content-section">
      <h2 className="text-center my-3">{"Skills"}</h2>

      <div className="py-3">
        <div className="container">
          {props.background_density !== undefined ? (
            <BackgroundPolygonComponent density={props.background_density} />
          ) : (
            ""
          )}
          {rows}
        </div>
      </div>
    </section>
  );
}
