import React from "react"
import { Link } from "gatsby";
import BdayLayout from "./bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">
            <div className="my-1">Get Sehul bhaiji's help in completing tasks!</div>

            <div className="my-5 py-2">Follow all <code>INSTRUCTIONS</code> carefully.</div>

            <div className="container my-5">
            <div className="my-3 text-size-1">Are you ready?</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                  <Link to="bday/vyom/2021/puzzle/1" className="btn btn-success btn-lg">Show me Task 1!</Link>
                </div>
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
