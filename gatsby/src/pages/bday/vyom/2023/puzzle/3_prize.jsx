import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';

import {base_link, base_class} from './../constants';

export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-warning text-white"> Prize</h1>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-6 ">  
                    Your next prize is somewhere in the drawing room!
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to={base_link+"/puzzle/share"} style={{fontSize: '2em',}} className="p-1 my-1 mx-5 btn btn-info text-size-8 text-white">Show the next task!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
