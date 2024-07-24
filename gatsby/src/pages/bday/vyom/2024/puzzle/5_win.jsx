import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  return (
    <BdayLayout>
      <div className="">
        <div className="">
          <div className="bday-heading ">Good Job: All puzzels solved!</div>
        </div>

        <div className="container m-5 p-5  text-size-10">
          <div className="m-5 p-5">
            Dadaji's mummy and papa (Budhhe Dadaji / Dadiji) can help you find
            your final gift!
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
