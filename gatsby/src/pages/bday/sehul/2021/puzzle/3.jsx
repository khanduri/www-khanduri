import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

        <div className="">
                <h1 className="mb-5 white-bt-1-1 text-white"> Case 3: Story count</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                {/* 
                    Act : Story  .. hindi book read a paragraph
                    Ques: Maths .. 6 hundreds  .. 3 tens .. 1 ones  + 5 hundreds .. 2 tens .. 1 ones

                 */}                
                <div className="my-3 text-size-5">   
                    <code>INSTRUCTION</code>: Bring your favorite hindi book and read a paragraph
                </div>
                
            <div className="my-5 white-bt-1-1" ></div>
            <div className="row my-3 py-3">
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1134</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1174</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1157</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1228</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1274</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1009</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1148</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/3_win" className="p-1 m-1 btn btn-primary text-white">1152</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1140</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1150</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1160</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">999</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
