import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-warning text-black"> First case solved!</h1>
                
                <div className="my-5 text-size-6">
                    Your <strong>first gift</strong> is where you sleep!
                </div>
            </div>
            
            <div className="container my-5">
                <Link to="/bday/sehul/2021/puzzle/2" className="p-1 m-2 btn btn-lg btn-warning px-4">
                    <div className="text-black">Continue to the next case ...</div>
                </Link>
            </div>

        </div>
    </BdayLayout>
  )
}
