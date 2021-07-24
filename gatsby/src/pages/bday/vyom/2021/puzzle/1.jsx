import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Task 1</h1>
                <div className="">Sehul bhaiji will read Vyom's task.</div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                {/* hint=count backwards  */}
                    <code>INSTRUCTION: Vyom has to count to 5</code>
                </div>

            <div className="row my-3 py-3">
                <div className="col"><Link to="bday/vyom/2021/puzzle/2" className="p-1 m-1 btn btn-info">Go to next task!</Link></div>
                {/* <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">54</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">55</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">57</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">22</Link></div> */}
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
