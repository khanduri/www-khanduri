import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';

import {base_link, base_class} from './../constants';

export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task Share</h1>
                {/* <div className="my-5 text-size-5 ">Sehul bhaiji .. please read the task to Vyom.</div> */}
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5 ">  
                    <code>TASK: Vyom has to say "Thank you" to Sehul bhaiji ... and Vyom has to gift the previous gift to Sehul bhaiji for all his help.</code>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to={base_link+"/puzzle/winner"} style={{fontSize: '2em',}} className="p-1 m-1 btn btn-lg btn-info text-size-8 text-white">Get my winner gift!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
