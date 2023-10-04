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
          <code className="hint">Gift hint</code>: What room should you check
          when you think of ...{" "}
          <code className="hint">Guitar, Electronics box, Ghummache!</code>
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
