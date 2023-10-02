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
            Sehul has to complete tasks to win his gifts.{" "}
          </div>
          <div className="py-2 ">Vyom can help. </div>
        </div>

        <div className="container my-5">
          <div className="my-5 ">Sehul, Are you ready?</div>

          <div className="row my-3 py-3">
            <div className="col"></div>
            <div className="col">
              <Link
                to={base_link + "/puzzle/1"}
                className="btn btn-success p-3 "
                style={{ fontSize: "1.2em", color: "#223322" }}
              >
                Yes .. Show the first task!
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
