import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 2</h1>
                <div className="">Sehul bhaiji .. please read Vyom's task to Vyom.</div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                    <code>TASK: Name a fruit that starts with the letter "A" </code>
                </div>

                <div className="row my-3 py-3">
                <div className="col"><Link to="bday/vyom/2021/puzzle/3" className="p-1 m-1 btn btn-info">Go to next task!</Link></div>
            </div>

            {/* <div className="row my-3 py-3">
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">stem</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/3" className="p-1 m-1 btn btn-info">root</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">leaf</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">fruit</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">flower</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">bud</Link></div>
            </div> */}
            </div>

        </div>
    </BdayLayout>
  )
}
