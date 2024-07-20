import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

        <div className="">
                <h1 className="mb-5 text-white"> Puzzle 4</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5  text-size-5">
                {/* 
                    Act : Learn and Play a game of Topple with Vyom .. Then gift the game to Vyom!
                    Ques: How many paise?
                    Prize: Chess

                 */}

                <div className="my-3 text-size-5">
                    <div className="">
                        <code>INSTRUCTION</code>: Learn and Play a game of Topple with Vyom and Aavya .. Now gift Topple to Vyom and Gift Dr Suess To Aavya! Did sharing make you happy?
                    </div>
                </div>
                
            <div className="my-5 white-bt-1-1" ></div>
            <div className="row my-3 py-3">
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">32</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">200</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">3200</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">320</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/4_win" className="text-white m-1 btn btn-primary">5800</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">1700</Link></div>

                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">5200</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">58</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">4800</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">48</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">5500</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">55</Link></div>
                
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">550</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">580</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">170</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">480</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">17</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2022/puzzle/wrong" className="text-white m-1 btn btn-primary">3900</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
