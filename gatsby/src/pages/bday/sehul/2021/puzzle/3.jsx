import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

        <div className="">
                <h1 className="mb-5 white-bt-1-1 text-white"> Case 3: Lengthy story</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5  text-size-5">
                {/* 
                    Act : Story  .. hindi book read a paragraph
                    Ques: Measure the line .. cut a string of 10 cm length  and a ruler in a box

                 */}                
                <p className="my-5">
                    Someone in your party is hiding the next <kbd>hint</kbd> .. and their weakness is <span className="strong">a story in HINDI</span>
                </p>
                <div className="my-3 text-size-5">
                    <div className="">
                    <code>INSTRUCTION</code>: Bring your favorite hindi book and read a paragraph.
                    </div>
                    <div className="">
                    You can pick any book you like or bring your Chacha Chaudhary book and read 2 pages.
                    </div>
                </div>
                
            <div className="my-5 white-bt-1-1" ></div>
            <div className="row my-3 py-3">
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">15 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/3_win" className="text-white m-1 btn btn-primary">10 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">5.5 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">2.5 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">18 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">15.5 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">12.5 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">8 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">5 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">8.5 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">13 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">16 cm</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
