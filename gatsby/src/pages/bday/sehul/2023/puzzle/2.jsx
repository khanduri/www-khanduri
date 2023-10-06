import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "captain poopy pants";

  const title = "Puzzle ✌";
  const instruction =
    "Get any hindi book and read a paragraph from it. Vyom has to get an english book and read a paragraph as well.";
  const hint_question = "Where do you go for education?";
  const options = [
    { link: "/puzzle/wrong", text: "कार्यालय" },
    { link: "/puzzle/wrong", text: "बगीचा" },
    { link: "/puzzle/wrong", text: "दुकान" },
    { link: "/puzzle/wrong", text: "अस्पताल " },
    { link: "/puzzle/2_win", text: "विद्यालय" },
    { link: "/puzzle/wrong", text: "मंदिर" },
    { link: "/puzzle/wrong", text: "सिनेमा हॉल" },
  ];

  return (
    <BdayLayout>
      <BDayForm
        {...{
          title,
          instruction,
          hint_question,
          options,
          HINT_KEY,
          base_link,
        }}
      />
    </BdayLayout>
  );
}
