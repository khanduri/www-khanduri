import React from "react";
import { Link } from "gatsby";

export const base_link = "/bday/sehul/2024";
export const base_class = "bday_sehul_2024";

export default function Index(props) {
  return "";
}

export function BDayForm(props) {
  const [showHint, setShowHint] = React.useState(false);
  const [hintBoxText, setHintBoxText] = React.useState("");

  const onInputBoxChange = (e, HINT_KEY) => {
    setHintBoxText(e.target.value);
    setShowHint(e.target.value === HINT_KEY ? true : false);
  };

  return (
    <div className="">
      <div className="">
        <h1 className="mb-5 text-5xl text-white"> {props.title}</h1>
        <div className="">
          Follow <code className="text-purple-400">INSTRUCTION</code> to earn
          your <code className="text-lime-300">HINT</code>
        </div>
      </div>

      <div className=" my-5">
        <div className="my-3 mx-5 px-5 ">
          <code className="text-purple-400">INSTRUCTION</code>
          <div className="mx-5 px-5 ">{props.instruction}</div>
        </div>

        <div className="my-5 ">
          <div className="">
            <code className="text-lime-300">HINT</code> goes here 👇
          </div>
          <input
            type="text"
            className="text-black"
            value={hintBoxText}
            onChange={(e) => onInputBoxChange(e, props.HINT_KEY)}
          />
        </div>

        {showHint ? (
          <div className="">
            <div className="my-5 white-bt-1-1"></div>
            <div className="">{props.hint_question}</div>
            <div className="row m-3 py-3">
              {props.options.map((option, idx) => (
                <div key={idx} className="col-2 m-3 ">
                  <Link
                    to={props.base_link + option.link}
                    className=" bday-btn bday-btn-option "
                    style={{ display: "block" }}
                  >
                    {option.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
