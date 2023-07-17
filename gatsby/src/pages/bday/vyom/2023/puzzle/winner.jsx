import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';

import {base_link, base_class} from './../constants';

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
                    Dadaji's mummy and papa may know where Vyom's final gift is .. Can you find your gift?
                </div>
            </div>

        </div>
    </BdayLayout>
  )
}
