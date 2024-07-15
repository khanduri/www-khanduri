import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-warning text-white"> Prize</h1>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-6 ">  
                    Sehul bhaiji .. Tell Vyom his first prize is under his bed!
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to="/bday/vyom/2022/puzzle/2" className="p-1 my-1 mx-5 btn btn-info text-size-8 text-white">Show the next task!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
