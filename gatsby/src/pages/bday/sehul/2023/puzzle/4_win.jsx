import React from "react";
import { Link } from "gatsby";
import BdayLayout from "../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  return (
    <BdayLayout>
      <div className="">
        <div className="bday-heading ">Solved!</div>

        <div className="my-5 ">
          <code className="hint">Gift hints</code>: Go to the room where you may
          find:{" "}
          <code className="hint">Electronics box, Ghummache, Guitar!</code>
        </div>
      </div>

      <div className="container my-5 py-5 ">
        <Link to={base_link + "/puzzle/5"} className=" bday-btn ">
          Next task ...
        </Link>
      </div>
    </BdayLayout>
  );
}
