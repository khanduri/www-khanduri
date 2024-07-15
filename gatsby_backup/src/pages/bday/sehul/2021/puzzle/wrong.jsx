import React from "react"
// import { Link } from "gatsby";
import BdayLayout from '../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="bg-danger my-5">
            
        <a href="javascript:window.history.back();">
            <h1 className="my-1 text-white strong">Wrong!</h1>
            <div className="text-white">Go back and solve again!</div>
        </a>
        </div>
    </BdayLayout>
  )
}
