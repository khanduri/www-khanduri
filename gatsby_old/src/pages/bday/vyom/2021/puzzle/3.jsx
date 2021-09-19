import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 3</h1>
                <div className="">Sehul bhaiji .. please read Vyom's task to Vyom.</div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                    <code>TASK: Name the different types of pollutions</code>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to="bday/vyom/2021/puzzle/winner" className="p-2 m-2 btn btn-info">Get Vyom's Gift!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
