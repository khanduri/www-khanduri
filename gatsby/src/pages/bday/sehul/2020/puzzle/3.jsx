import React from "react"
import BdayLayout from "../bday_layout";


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="my-1 bg-success text-white"> Puzzle 3</h1>
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
            {/* <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Mercury</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Venus</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Earth</a></div>
                <div className="col-1"><a href="small" className="p-1 m-1 btn btn-info">Mars</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Jupiter</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Saturn</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Uranus</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Neptune</a></div>
                 */}
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Jupiter</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Earth</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Mercury</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Venus</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Uranus</a></div>
                <div className="col-1"><a href="small" className="p-1 m-1 btn btn-info">Mars</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Neptune</a></div>
                <div className="col-1"><a href="wrong" className="p-1 m-1 btn btn-info">Saturn</a></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
