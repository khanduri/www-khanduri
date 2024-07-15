import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-info text-white"> Puzzle 1</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 ">  
                {/* hint=count backwards  */}
                    <code>INSTRUCTION: Sing the gyananda song OR Recite the Ibn Batuta poem </code>
                </div>

                <h1 className="">
                    47 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> .. 
                    <span className="mx-3"></span> [X]
                </h1>

            <div className="row my-3 py-3">
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">48</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">26</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">39</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">76</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">41</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">78</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">56</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/2" className="p-1 m-1 btn btn-info">38</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">54</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">55</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">57</Link></div>
                <div className="col-1"><Link to="/bday/sehul/2020/puzzle/wrong" className="p-1 m-1 btn btn-info">22</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
