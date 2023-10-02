import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  return (
    <BdayLayout>
      <div className="">
        <div className="">
          <h1 className="mb-5 text-white"> Puzzle 3</h1>
          <div className="">
            Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
          </div>
        </div>

        <div className="container my-5  text-size-5">
          {/* 
                    Act: Learn a magic trick and trick someone!
                    Ques: Pointing device .. ANS: mouse
                    Prize: Topple

                 */}

          <div className="my-3 text-size-5">
            <div className="">
              <code>INSTRUCTION</code>: Learn a magic trick from Abracadabra
              magic set and trick someone!
            </div>
          </div>

          <div className="my-5 white-bt-1-1"></div>
          <div className="row my-3 py-3">
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                Keypad
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                CPU
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                Monitor
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                Printer
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/3_win"}
                className="text-white m-1 btn btn-primary"
              >
                Mouse
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                Speaker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
