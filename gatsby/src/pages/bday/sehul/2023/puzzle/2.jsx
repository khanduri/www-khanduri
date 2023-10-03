import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  // Act : Prepare a powerpoint presentation with at least 5 slides on the Space encyclopedia .. Vyom to explain 1 slide
  // Ques: Where do you go to study?
  // Prize:

  const options = [
    { link: "/puzzle/wrong", text: "कार्यालय" },
    { link: "/puzzle/wrong", text: "बगीचा" },
    { link: "/puzzle/wrong", text: "दुकान" },
    { link: "/puzzle/wrong", text: "अस्पताल " },
    { link: "/puzzle/2_win", text: "विद्यालय" },
    { link: "/puzzle/wrong", text: "मंदिर" },
    { link: "/puzzle/wrong", text: "सिनेमा हॉल" },
  ];

  return (
    <BdayLayout>
      <div className="">
        <div className="">
          <h1 className="mb-5 text-white"> Puzzle ✌</h1>
          <div className="">
            Follow the <code className="inst">INSTRUCTION</code> to earn your{" "}
            <code className="hint">HINT</code>!
          </div>
        </div>

        <div className="container my-5">
          <div className="my-3 ">
            <code className="inst">INSTRUCTION</code>: Prepare a powerpoint
            presentation with at least 5 slides on the Space encyclopedia ..
            Vyom to explain 1 slide as well to earn the{" "}
            <code className="hint">HINT</code>
          </div>

          <div className="my-5 white-bt-1-1"></div>
          <div className="row m-3 py-3">
            {options.map((option, idx) => (
              <div key={idx} className="col-2 m-3 ">
                <Link
                  to={base_link + option.link}
                  className=" bday-btn bday-btn-option "
                  style={{ display: "block" }}
                >
                  {option.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
