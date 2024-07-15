import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Puzzle 2</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                {/* hint=I am 5! What's my name? */}
                    <code>INSTRUCTION: Bring your piano and play the woodpecker song with each hand one by one</code>
                </div>

                <img className="img-fluid rounded" src="/images/bday/sehul/2020/2.png" alt=""/>

            <div className="row my-3 py-3">
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">stem</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/3" className="p-1 m-1 btn btn-info">root</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">leaf</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">fruit</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">flower</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">bud</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
