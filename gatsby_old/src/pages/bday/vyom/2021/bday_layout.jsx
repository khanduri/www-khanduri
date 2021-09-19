import React from "react"
import ClearPageLayout from "../../../../common/clear";


export default function Index(props) {
  return (
    <ClearPageLayout>
        <div className="my-5 container text-center highlight-black-9 rounded text-white">
            
            <div className="py-2">
                <h1 className="my-2">Happy <span className="mx-3"></span>Birthday <span className="mx-3"></span>Vyom!</h1>
                <a href="/bday/vyom/2021" className="my-2 uppercase text-size-2">Gift hunt</a>
            </div>

            <div className="my-5">
              <div className="p-1 my-5">
                {props.children}
                </div>
            </div>

        </div>
    </ClearPageLayout>
  )
}
