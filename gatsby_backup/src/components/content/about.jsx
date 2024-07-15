import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";
import { ABOUT } from "../constants/prashant";

function AboutComponentItem(props) {
  var aboutItem = props.items;

  if (aboutItem.type == "text") {
    return (
      <div
        className="mx-4 my-5 text-size-4 text-wide-1"
        dangerouslySetInnerHTML={{ __html: aboutItem.content }}
      ></div>
    );
  }

  if (aboutItem.type == "list") {
    var rows = [];

    aboutItem.content.map(function (listItem, i) {
      rows.push(
        <li key={"about_list_item_" + i}>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: listItem }}
          ></div>
        </li>
      );
    });

    return (
      <div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: aboutItem.title }}
        ></div>
        <ul className="">{rows}</ul>
      </div>
    );
  }

  return <div> SOMETHING WENT WRONG !</div>;
}

export default function AboutComponent(props) {
  // const about = props.items || [];
  const about = ABOUT;

  return (
    <section id="about" className="content-section  bg-primary">
      <div className="py-3">
        <div className="container text-light">
          {props.background_density !== undefined ? (
            <BackgroundPolygonComponent density={props.background_density} />
          ) : (
            ""
          )}

          <h2 className="text-center">About Me</h2>
          {about.map(function (aboutItem, i) {
            return (
              <AboutComponentItem items={aboutItem} key={"about_item_" + i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
