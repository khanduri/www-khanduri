import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-success text-white"> WINNER!</h1>

                <div className="my-5 text-size-5">
                    Congratulations!
                </div>

                <div className="container my-5 py-5  text-size-6">
                    Dadaji's mummy and papa may know where Vyom's gift is .. Can Vyom find the gift?
                </div>
            </div>

        </div>
    </BdayLayout>
  )
}
