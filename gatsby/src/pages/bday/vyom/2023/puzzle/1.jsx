import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';

import {base_link, base_class} from './../constants';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 1</h1>
                <div className="my-5 text-size-5 ">Vyom has to read and complete the task!</div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5 " style={{fontSize: '2em', }}>  
                    <code>TASK: Get your drawing board and draw and colour a sun, 3 trees and a few birds.</code>
                    <p className="">Sehul bhaiji cannot help!</p>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to={base_link+"/puzzle/1_prize"} className="p-1 m-1 btn btn-lg btn-info text-size-8 text-white">Get the prize!</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
