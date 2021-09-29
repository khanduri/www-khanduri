import React from "react"
import { Link } from "gatsby";
import BdayLayout from './base';


export default function Index() {
  return (
    <BdayLayout>
      <div className="">

          <div className="my-5 text-size-8">Hello detective Sehul!</div>
          <div className="my-5 text-size-5">You seem to have enjoyed the stories of detective Sherlock Holmes .. Just like him, you'll have to solve a few cases to get your gift this year.</div>
          {/* <div className="my-5 text-size-5">You're a year older so the puzzles are harder!</div> */}
          
          <div className="container my-5">
            <div className="my-5 text-size-8">Click start when ready!</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                {/* <div className="col"> */}
                    <Link to="/bday/sehul/2021/inst" className="col btn btn-success btn-lg text-size-8 text-white">Let's start</Link>
                {/* </div> */}
                <div className="col"></div>
            </div>
          </div>
      </div>
    </BdayLayout>
  )
}
