import React from "react"
import BdayLayout from "./bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">
            <div className="my-5 py-2">You have to follow <code>INSTRUCTIONS</code> to earn <kbd>hints</kbd>. You will need all <kbd>hints</kbd> to solve your puzzles!</div>
            <div className="my-5 py-2">Follow all <code>INSTRUCTIONS</code> carefully.</div>
            
            <div className="container my-5">
            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                    <a href="puzzle/1" className="btn btn-success btn-lg">Show me Puzzle 1!</a>
                </div>
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
