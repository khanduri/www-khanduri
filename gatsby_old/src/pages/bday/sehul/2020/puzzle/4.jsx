import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Puzzle 4</h1>
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
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Sails a ship</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Draws or paint</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Makes sick people well</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Brings letters</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Grows crops</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Makes clothes</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/winner" className="p-2 m-2 btn btn-info">Flies a spaceship</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Checks teeth</Link></div>
                <div className="col-4"><Link to="bday/sehul/2020/puzzle/wrong" className="p-2 m-2 btn btn-info">Flies an aeroplane</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
