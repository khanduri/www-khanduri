import React from "react"
import { Link } from "gatsby";
import BdayLayout from '../base';

import {base_link, base_class} from './../constants';

export default function Index() {
  return (
    <BdayLayout>
        <div className="bg-danger">
            
            <h1 className="my-1 text-white strong">Wrong!</h1>
            <div className="text-white">Go back and solve again!</div>
        </div>
    </BdayLayout>
  )
}
