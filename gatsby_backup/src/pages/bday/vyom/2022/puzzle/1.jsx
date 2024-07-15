import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 1</h1>
                <div className="my-5 text-size-5 ">Sehul bhaiji .. please read the task to Vyom.</div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5 ">  
                    <code>TASK: Vyom has to collect and count 20 cars .. Sehul bhaiji can help.</code>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to="/bday/vyom/2022/puzzle/1_prize" className="p-1 m-1 btn btn-lg btn-info text-size-8 text-white">Get the prize!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
