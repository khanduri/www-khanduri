import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./base";

import { base_link, base_class } from "./constants";

export default function Index() {
  return (
    <BdayLayout body_class={base_class} name="Sehul" link={base_link}>
      <div className="p-3 ">
        <div className="p-3 ">
          You have to complete tasks to win your gifts.
        </div>

        <div className="p-3 ">Are you ready?</div>

        <div className="p-3 ">
          <Link
            to={base_link + "/puzzle/1"}
            className=" bg-lime-200 text-gray-800 hover:text-gray-900 rounded p-3 "
          >
            Show the first task!
          </Link>
        </div>
      </div>
    </BdayLayout>
  );
}
