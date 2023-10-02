import React from "react";
import { Link } from "gatsby";
import BdayLayout from "./../base";

import { base_link, base_class } from "./../constants";

export default function Index() {
  return (
    <BdayLayout>
      <div className="">
        <div className="">
          <h1 className="mb-5 text-white"> Puzzle 1</h1>
          <div className="">
            Follow the <code>INSTRUCTION</code> to earn your <kbd>HINT</kbd>!
          </div>
        </div>

        <div className="container my-5">
          <div className="my-3 ">
            {/* 
                        Act: solve 100+ and 30+ peice puzzle .. Show the solved puzzle to Chacha
                        Ques: How many family members live in your house (including you). ANS: VII
                        Prize: Space book
                    */}
            <code>INSTRUCTION</code>: Get 2 puzzles from your toy area. You have
            to solve a 100+ piece puzzle and Vyom has to solve a 30+ piece
            puzzle. Solve both jigsaw puzzles to win the <kbd>HINT</kbd>
          </div>

          <div className="my-5 white-bt-1-1"></div>
          <div className="row my-3 py-3">
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                I
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                II
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                III
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                IV
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                V
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                VI
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/1_win"}
                className="m-2 btn text-dark btn-primary"
              >
                VII
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                VIII
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                IX
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                X
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                XI
              </Link>
            </div>
            <div className="col-2">
              <Link
                to={base_link + "/puzzle/wrong"}
                className="m-2 btn text-dark btn-primary"
              >
                XII
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BdayLayout>
  );
}
