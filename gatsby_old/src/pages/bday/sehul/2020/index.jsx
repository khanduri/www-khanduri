import React from "react"
import { Link } from "gatsby";
import BdayLayout from "./bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">
            <div className="my-1">You're a big kid now! You will have solve puzzles to earn your gift this year.</div>
            
            <div className="container my-5">
            <div className="my-3 text-size-1">Are you ready?</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                    <Link to="bday/sehul/2020/inst" className="btn btn-success btn-lg">I want my gift!</Link>
                </div>
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
