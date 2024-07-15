import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 2</h1>
                <div className="my-5 text-size-5 ">Sehul bhaiji .. please read the task to Vyom.</div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5 ">  
                    <code>TASK: Vyom has say "Thank you for teaching me the poem!" to Sehul bhaiji ... and Vyom has to gift the puzzle to Sehul bhaiji because Sehul Bhaiji helped him in all the tasks.</code>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to="/bday/vyom/2022/puzzle/winner" className="p-1 m-1 btn btn-lg btn-info text-size-8 text-white">Get my winner gift!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
