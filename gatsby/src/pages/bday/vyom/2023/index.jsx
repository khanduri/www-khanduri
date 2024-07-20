import React from "react"
import { Link } from "gatsby";
import BdayLayout from './base';

import {base_link, base_class} from './constants';

export default function Index() {

  return (
    <BdayLayout body_class={base_class} name="Vyom" link={base_link}>
        <div className="">
          
          <div className="container my-5">
            <div className="py-2 text-size-5">Vyom has to complete tasks to win his gifts. </div>
            <div className="py-2 text-size-5">Sehul bhaiji can help if allowed in the task ... </div>
          </div>

            <div className="container my-5">
              <div className="my-3 text-size-8">Vyom, Are you ready?</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                  <Link to={base_link+"/puzzle/1"} className="btn btn-success btn-lg text-white" style={{fontSize: '2em',}}>Yes! Show the first Task.</Link>
                </div>
                {/* <div className="col">
                  <Link to={base_link} className="btn btn-danger text-white" style={{fontSize: '2em',}}>No! I don't want to play.</Link>
                </div> */}
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
