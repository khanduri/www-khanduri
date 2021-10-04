import React from "react"
import { Link } from "gatsby";
import BdayLayout from './../base';


export default function Index() {
  return (
    <BdayLayout>
        <div className="">

            <div className="">
                <h1 className="mb-5 white-bt-1-1 text-white"> Case 2: The green number</h1>
                <div className="">
                    Follow the <code>INSTRUCTIONS</code> to earn your <kbd>hint</kbd>!
                </div>
            </div>
            
            <div className="container my-5">
                
                <div className="my-3 text-size-5">  
                {/* 
                    Act : Colour .. create green by mixing blue and yellow
                    Ques: Maths .. 6 hundreds  .. 3 tens .. 1 ones    +    5 hundreds .. 2 tens .. 1 ones
                 */}
                    <p className="my-5">
                        Someone in your party is hiding a <kbd>hint</kbd> .. and their weakness is <span className="strong">GREEN HULK</span>
                    </p>
                    
                    <div className="">
                    <code>INSTRUCTION</code>: Colour the hulk and show it to everyone in your party. 
                    </div>
                    <div className="">
                    Oh wait .. we don't have any green colour. Maybe <a target="_blank" href="/images/bday/sehul/2021/colours.jpg" className="">this</a> can help
                    </div>
                </div>
                
            <div className="my-5 white-bt-1-1" ></div>
            <div className="row my-3 py-3">
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1009</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1134</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1140</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1144</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1145</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1148</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1150</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/2_win" className="p-1 m-1 btn btn-primary text-white">1152</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1154</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1157</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1160</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1164</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1168</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1172</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1174</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1184</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1194</Link></div>
                <div className="col-2"><Link to="/bday/sehul/2021/puzzle/wrong" className="p-1 m-1 btn btn-primary text-white">1228</Link></div>
            </div>
            </div>

        </div>
    </BdayLayout>
  )
}
