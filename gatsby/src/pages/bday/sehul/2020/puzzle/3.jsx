import React from "react"
import { Link } from "gatsby";
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Puzzle 3</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                {/* hint=4th planet from the sun */}
                    <code>INSTRUCTION: Bring your favorite storybook and Read a paragraph </code>
                </div>

            <div className="row my-3 py-3">
            {/* <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Mercury</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Venus</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Earth</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/small" className="p-1 m-1 btn btn-info">Mars</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Jupiter</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Saturn</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Uranus</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Neptune</Link></div>
                 */}
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Jupiter</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Earth</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Mercury</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Venus</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Uranus</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/small" className="p-1 m-1 btn btn-info">Mars</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Neptune</Link></div>
                <div className="col-1"><Link to="bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">Saturn</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
