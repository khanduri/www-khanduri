import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-warning text-white"> SMALL winner</h1>
                
                <div className="my-5 text-size-3">
                    A <strong>SMALL</strong> gift is under your bed!
                </div>
            </div>
            
            <div className="container my-5">
                <a href="4" className="p-1 m-2 btn btn-lg btn-success px-4">Continue to your BIG gift ...</a>
            </div>

        </div>
    </BdayLayout>
  )
}
