import React from "react"
import { Link } from "gatsby";
import BdayLayout from './base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="my-5 text-size-5">To solve the puzzles you'll need to earn <kbd>HINTS</kbd>.</div>
            <div className="my-5 text-size-5">To earn these <kbd>HINTS</kbd> you'll have to follow the <code>INSTRUCTIONS</code> described in each puzzle.</div>

            <div className="my-5 py-2 text-size-7">Follow all <code>INSTRUCTIONS</code> carefully.</div>
            
            <div className="container my-5">
            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                    <Link to="/bday/sehul/2022/puzzle/1" className="btn btn-success btn-lg text-white">Show me Puzzle #1</Link>
                </div>
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
