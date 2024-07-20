import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import ClearPageLayout from "../../../common/clear";

import "../../../styles/birthday.scss";

export default function Layout(props) {
  return (
    <ClearPageLayout>
      <Helmet>
        <body className={"  " + (props.body_class || " bday_layout ")} />
        <title>{props.name}'s Birthday gift hunt</title>
      </Helmet>

      <div className="my-5 container text-center highlight-black-9 rounded text-white">
        <div className="py-2 highlight-m-2 ">
          <div
            className="my-2 text-spacing-4 birthday_gradient p-3 "
            style={{ fontSize: "4em", color: "#333" }}
          >
            <Link to={props.link} className="text-gray-900">
              Happy <span className="mx-3"></span>
              Birthday <span className="mx-3"></span>
              {props.head ? (
                <img
                  style={{ width: "80px", display: "inline" }}
                  className="block-inline img-fluid rounded"
                  src={props.head}
                  alt=""
                />
              ) : (
                <span className="text-spacing-6 uppercase"> {props.name}</span>
              )}
            </Link>
          </div>
        </div>

        <div className="my-5">
          <div className="p-1 my-5 text-size-8">{props.children}</div>
        </div>
      </div>
    </ClearPageLayout>
  );
}
