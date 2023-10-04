import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./base";

import { base_link, base_class } from "./constants";

export default function Index() {
  return (
    <BdayLayout body_class={base_class} name="Sehul" link={base_link}>
      <div className="">
        <div className="container my-5">
          <div className="py-2 ">
            Sehul has to complete tasks to win his gifts. Vyom can help.
          </div>
        </div>

        <div className="container my-5">
          <div className="my-5 py-5 ">Are you ready?</div>

          <div className="row my-5 py-5">
            <div className="col"></div>
            <div className="col">
              <Link to={base_link + "/puzzle/1"} className=" bday-btn ">
                Show the first task!
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
