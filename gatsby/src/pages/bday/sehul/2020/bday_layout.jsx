import React from "react"
// import ClearPageLayout from "../../../../common/clear";
import BDayLayout from './../../base/bday_layout';


export default function Index(props) {
  return (
    // <ClearPageLayout>
    //     <div className="my-5 container text-center">
            
    //         <div className="">
    //             <h1>Happy <span className="mx-3"></span>Birthday <span className="mx-3"></span>Sehul!</h1>
    //             <a href="/bday/sehul/2020" className="uppercase text-size-2">Birthday gift hunt!</a>
    //         </div>

    //         <div className="my-5">
    //           <div className="p-1 my-5">
    //             {props.children}
    //             </div>
    //         </div>

    //     </div>
    // </ClearPageLayout>
    <BDayLayout name="Sehul" link="/bday/sehul/2020">
      {props.children}
    </BDayLayout>
  )
}
