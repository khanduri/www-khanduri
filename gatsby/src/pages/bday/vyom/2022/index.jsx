import React from "react"
import { Link } from "gatsby";
import BdayLayout from './base';


export default function Index() {
  return (
    <BdayLayout body_class="bday_vyom_2022" name="Vyom" link="/bday/vyom/2022">
        <div className="">
          
          <div className="container my-5">
            <div className="py-2 text-size-5">Vyom has to complete tasks to win his gifts. </div>
            <div className="py-2 text-size-5">Sehul bhaiji can help in completing the tasks ... </div>
          </div>

            <div className="container my-5">
              <div className="my-3 text-size-8">Vyom, Are you ready?</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                  <Link to="/bday/vyom/2022/puzzle/1" className="btn btn-success btn-lg text-size-8 text-white">Go to the first Task!</Link>
                </div>
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
