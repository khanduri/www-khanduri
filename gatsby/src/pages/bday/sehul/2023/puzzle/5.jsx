import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  return (
    <BdayLayout>
      <div className="">
        <div className="">
          <h1 className="mb-5 text-white"> Puzzle 5</h1>
          <div className="">
            Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
          </div>
        </div>

        <div className="container my-5  text-size-5">
          {/* 
                    Act : Find an opponent and play a game of Chess. You don't have to win, but you do have to finish a game.
                    Ques: 7 × 5 − (19 + 11 − 23) = 28
                    Prize: Telescope

                 */}
          <div className="my-3 text-size-5">
            <div className="">
              <code>INSTRUCTION</code>: Find an opponent and play a game of
              Chess. You don't have to win, but you do have to finish a game.
            </div>
          </div>

          <div className="my-5 white-bt-1-1"></div>
          <div className="row my-3 py-3">
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                1
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                5
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                50
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                84
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                66
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                92
              </Link>
            </div>

            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                51
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/5_win"}
                className="text-white m-1 btn btn-primary"
              >
                28
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                7
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                37
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                35
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="text-white m-1 btn btn-primary"
              >
                24
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
