import React from "react"
import { Link } from "gatsby";
import BdayLayout from './base';


export default function Index() {
  return (
    <BdayLayout>
      <div className="">

          <div className="my-5 text-size-8">Hello Sehul!</div>
          <div className="my-5 text-size-5">You're a year older so the puzzles are harder and you'll have to work with Vyom and Aavya!</div>
          <div className="my-5 text-size-5">Ask Vyom and Aavya if they are ready to help you.</div>
          
          <div className="container my-5">
            <div className="my-5 text-size-8">Start when ready!</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                {/* <div className="col"> */}
                    <Link to="/bday/sehul/2022/inst" className="col btn btn-success btn-lg text-size-8 text-white">Let's start</Link>
                {/* </div> */}
                <div className="col"></div>
            </div>
          </div>
      </div>
    </BdayLayout>
  )
}
