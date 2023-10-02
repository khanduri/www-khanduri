import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  return (
    <BdayLayout>
      <div className="">
        <div className="">
          <h1 className="mb-5 text-white"> Puzzle 2</h1>
          <div className="">
            Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
          </div>
        </div>

        <div className="container my-5">
          <div className="my-3 text-size-5">
            {/* 
                    Act : Prepare a powerpoint presentation with at least 5 slides on the Space encyclopedia .. Vyom to explain 1 slide
                    Ques: How many states in India?
                    Prize: Abracadabra 
                 */}
            <div className="">
              <code>INSTRUCTION</code>: Pick an interesting topic from the space
              encyclopedia and prepare a powerpoint presentation with at least 5
              slides. You and Aavya can explain 4 slides, but Vyom has to
              explain 1 slide so make sure to teach him about the topic.
            </div>
          </div>

          <div className="my-5 white-bt-1-1"></div>
          <div className="row my-3 py-3">
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                20
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                21
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                22
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                23
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                24
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                26
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                27
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/2_win"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                28
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                29
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                30
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                31
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                32
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                33
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                34
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                35
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="p-1 m-1 btn btn-primary text-white"
              >
                36
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
