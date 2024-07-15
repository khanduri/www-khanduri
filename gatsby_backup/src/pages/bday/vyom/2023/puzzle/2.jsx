import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';

import {base_link, base_class} from './../constants';

export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 2</h1>
                {/* <div className="my-5 text-size-5 ">Sehul bhaiji .. please read the task to Vyom.</div> */}
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5 ">  
                    <div className="">
                        <code>TASK: Sehul bhaiji has 5 minutes to teach Vyom addition and subtraction. </code>
                    </div>
                    <div className="">
                        <code>Vyom will have to pass the following test:</code>
                    </div>

                    <div className="my-5 " style={{fontSize: '2em'}}>
                        <p className="">2 + 5 = </p>
                        <p className="">7 + 3 = </p>
                        <p className="">5 - 1 = </p>
                        <p className="">4 - 4 = </p>
                    </div>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to={base_link+"/puzzle/2_prize"} className="p-1 m-1 btn btn-lg btn-info text-size-8 text-white">Get the prize!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
