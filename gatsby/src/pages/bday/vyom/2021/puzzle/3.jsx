import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 3</h1>
                {/* <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div> */}
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                {/* hint=astronaut */}
                    <code>INSTRUCTION: Name the different types of pollutions</code>
                </div>

            <div className="row my-3 py-3">
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/winner" className="p-2 m-2 btn btn-info">Get Vyom's Gift!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
