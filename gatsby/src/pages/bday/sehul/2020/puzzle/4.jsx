import React from "react"
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <div className="my-1 bg-success text-white">Let's start!</div>
                <h1 className="my-1"> Puzzle 4</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                {/* hint=astronaut */}
                    <code>INSTRUCTION: Gift the small gift to Vyom </code>
                </div>

            <div className="row my-3 py-3">
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Sails a ship</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Draws or paint</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Makes sick people well</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Brings letters</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Grows crops</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Makes clothes</a></div>
                <div className="col-4"><a href="winner" className="p-2 m-2 btn btn-info">Flies a spaceship</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Checks teeth</a></div>
                <div className="col-4"><a href="wrong" className="p-2 m-2 btn btn-info">Flies an aeroplane</a></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
