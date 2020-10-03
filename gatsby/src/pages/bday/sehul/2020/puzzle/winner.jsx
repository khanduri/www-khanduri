import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-success text-white"> GIFT WINNER!</h1>

                <div className="my-5 text-size-5">
                    Congratulation you finished all the puzzels!
                </div>

                <div className="my-5">
                    Dadaji's mummy and papa know where your gift is! Do you have a photo of them?
                </div>
            </div>
            
        </div>
    </BdayLayout>
  )
}
