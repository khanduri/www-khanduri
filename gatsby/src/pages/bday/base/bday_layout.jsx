import React from "react";
import Helmet from'react-helmet';

import ClearPageLayout from "../../../common/clear";

import "../../../styles/birthday.css";


export default function Layout(props) {
  return (

    <ClearPageLayout >
      <Helmet>
        <body className={props.body_class || "bday_layout"} />
        <title>{props.name}'s Birthday</title>
      </Helmet>

    <div className="my-5 container text-center highlight-black-9 rounded text-white">
        
        <div className="py-2">
            <h1 className="my-2">
              Happy <span className="mx-3"></span>Birthday <span className="mx-3"></span>
              {props.name}
            </h1>
            <a href={props.link} className="my-2 uppercase text-size-2">Gift hunt</a>
        </div>

        <div className="my-5">
          <div className="p-1 my-5">
            {props.children}
            </div>
        </div>

    </div>
</ClearPageLayout>

  );
}