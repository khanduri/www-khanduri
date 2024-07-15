import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";

const PRASHANT_ACTIVITIES = {
  projects: [
    {
      name: "SupaCTA: Collect Emails",
      keywords: ["python", "flask", "heroku"],
      link: "https://supacta.bytebeacon.com/",
    },
    {
      name: "Divshow: Product Walkthroughs",
      keywords: ["python", "react", "docker", "webpack", "aws"],
      link: "https://divshow.bytebeacon.com/",
    },
    {
      name: "ByteTrack: Track recurring activities",
      keywords: [],
      link: "https://bytetrack.bytebeacon.com/",
    },
    {
      name: "Pulsico: Set future reminders",
      keywords: ["python", "flask", "heroku"],
      link: "http://pulsico.herokuapp.com/",
    },
    {
      name: "AuroFit: Plan your Workout",
      keywords: ["health tech", "python", "react native"],
      link: "https://workoutgen-stage.herokuapp.com/",
    },
    {
      name: "EZ Apps: iOS apps",
      keywords: ["mobile", "objective-c", "consumer apps"],
      link: "http://ezapps.herokuapp.com/",
    },
    {
      name: "Transliteration: En to Hi",
      keywords: [],
      link: "",
    },
    {
      name: "Emotion Recognition: Neural Networks",
      keywords: [],
      link: "",
    },
  ],
  groups: [
    {
      name: "Asha for Education",
      link: "",
    },
    {
      name: "Ekal Vidyalaya",
      link: "",
    },
    {
      name: "Trekkers / Runners group",
      link: "",
    },
    {
      name: "Engineering Exploration Volunteer",
      link: "",
    },
  ],
  hobbies: [
    {
      name: "Weekend runner",
      link: "http://www.mapmyrun.com/profile/83707647/",
    },
    {
      name: "Guitar newbie",
      link: "https://github.com/khanduri/guitar",
    },
    {
      name: "Tennis enthusiast",
      link: "",
    },
  ],
};

export default function ActivitiesComponent(props) {
  var activities = PRASHANT_ACTIVITIES;

  return (
    <section id="projects" className="content-section bg-primary">
      <div className="py-3">
        <div className="container  text-light">
          {props.background_density !== undefined ? (
            <BackgroundPolygonComponent density={props.background_density} />
          ) : (
            ""
          )}

          <h2 className="text-center my-3 ">Activities</h2>

          <div className="row">
            {Object.keys(activities).map(function (category, i) {
              return (
                <div key={"activity_" + i} className="col-md-4">
                  <div className="text-center">{category.toUpperCase()}</div>
                  <br />
                  {activities[category].map(function (task, i) {
                    var link = task.link;
                    var name = task.name;
                    if (link) {
                      return (
                        <div
                          key={"activity_task_" + i}
                          className="card rounded text-center m-1 p-2"
                        >
                          <a className="link-inv" href={"" + link}>
                            {name}
                          </a>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={"activity_task_" + i}
                          className="card rounded text-center m-1 p-2 text-dark"
                        >
                          {name}
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
