import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "10 06 07 25";

  const title = "Puzzle 🤟";
  const instruction =
    "Give Vyom a maths test (4 addition questions and 1 subtraction questions) and help him solve it!";
  const hint_question =
    "If you have 60 candies and you want to share them equally among 6 friends, how many candies will each friend get?";
  const options = [
    { link: "/puzzle/wrong", text: "3" },
    { link: "/puzzle/wrong", text: "15" },
    { link: "/puzzle/wrong", text: "6" },
    { link: "/puzzle/3_win", text: "10" },
    { link: "/puzzle/wrong", text: "20" },
    { link: "/puzzle/wrong", text: "8" },
    { link: "/puzzle/wrong", text: "1" },
    { link: "/puzzle/wrong", text: "11" },
    { link: "/puzzle/wrong", text: "5" },
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
