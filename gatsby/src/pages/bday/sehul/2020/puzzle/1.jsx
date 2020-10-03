import React from "react"
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-success text-white"> Puzzle 1</h1>
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
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">48</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">26</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">39</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">76</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">41</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">78</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">56</a></div>
                <div className="col-1"><a href="2" className="p-1 m-1 btn btn-info">38</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">54</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">55</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">57</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">22</a></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
