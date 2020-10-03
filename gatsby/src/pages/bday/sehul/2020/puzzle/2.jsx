import React from "react"
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-success text-white"> Puzzle 2</h1>
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
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">stem</a></div>
                <div className="col-1"><a href="3" className="p-1 m-1 btn btn-info">root</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">leaf</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">fruit</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">flower</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">bud</a></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
