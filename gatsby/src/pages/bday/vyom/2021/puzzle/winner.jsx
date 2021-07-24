import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-success text-white"> WINNER!</h1>

                <div className="my-5 text-size-5">
                    Congratulation Vyom! With Sehul bhaiji's help you finished all the tasks!
                </div>

                <div className="my-5">
                    Dadaji's mummy and papa have your gift. Sehul bhaiji can get your gift, if he can find their photos!
                </div>
            </div>

        </div>
    </BdayLayout>
  )
}
