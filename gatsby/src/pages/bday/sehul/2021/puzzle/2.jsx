import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="mb-5 highlight-primary-2 text-white"> Case 2: Green inch</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5">  
                {/* 
                    Act : Colour .. create green by mixing blue and yellow
                    Ques: Measure the line .. cut a string of 10 cm length  and a ruler in a box
                 */}
                    <p className="my-5">
                        Someone in your party is hiding a <kbd>hint</kbd> .. and their weakness is <span className="strong">GREEN HULK</span>
                    </p>
                    <code>INSTRUCTION</code>: Colour the hulk image. Oh wait .. we don't have any green.
                </div>

                {/* <img className="img-fluid rounded" src="/images/bday/sehul/2020/2.png" alt=""/> */}

            <div className="row my-3 py-3">
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="text-white m-1 btn btn-primary">15 cm</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/3" className="text-white m-1 btn btn-primary">10 cm</Link></div>
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
