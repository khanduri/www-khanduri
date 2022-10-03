import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="mb-5 text-white"> Puzzle 1</h1>
                <div className="">
                    Follow the <code>INSTRUCTION</code> to earn your <kbd>HINT</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5">  
                    {/* 
                        Act : solve 100+ and 30+ peice puzzle .. Show the solved puzzle to Chacha
                        Ques: ??? - read the time .. draw an analog clock image with 10:30 on it
                        Prize: Space book
                    */}
                    <p className="my-5">
                        Someone in your party is hiding a <kbd>hint</kbd> .. and their weakness is <span className="strong">DANCING</span>
                    </p>
                    <code>INSTRUCTION</code>: solve 100+ and 30+ peice puzzle
                    
                </div>

            <div className="my-5 white-bt-1-1"></div>
            <div className="row my-3 py-3">
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">01:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">01:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">02:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">02:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">03:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">03:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">04:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">04:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">05:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">05:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">06:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">06:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">07:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">07:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">08:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">08:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">09:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">09:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">10:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/1_win" className="m-2 btn text-white btn-primary">10:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">11:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">11:30 </Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">12:00</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="m-2 btn text-white btn-primary">12:30 </Link></div>

            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
