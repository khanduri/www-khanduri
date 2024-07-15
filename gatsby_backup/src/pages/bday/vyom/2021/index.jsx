import React from "react"
import { Link } from "gatsby";
import BdayLayout from './base';


export default function Index() {
  return (
    <BdayLayout body_class="bday_vyom_2021" name="Vyom" link="/bday/vyom/2021">
        <div className="">
          
          <div className="container my-5 text-size-1">
            <div className="py-2 ">Vyom has to complete tasks to win his gift. </div>
            <div className="py-2 ">Maybe Sehul bhaiji can help in completing the tasks ... </div>
          </div>

            <div className="container my-5">
              <div className="my-3 text-size-1">Are you ready?</div>

            <div className="row my-3 py-3">
                <div className="col"></div>
                <div className="col">
                  <Link to="/bday/vyom/2021/puzzle/1" className="btn btn-success btn-lg">Go to the first Task!</Link>
                </div>
                <div className="col"></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
