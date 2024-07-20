import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "vishwa vijeta";

  const title = "Puzzle 🤟";
  const instruction = "Sing the gyananda song!";
  const hint_question =
    "If you have 2 apples and dadi gives you 3 more but chacha eats 1 apple, how many apples do you have now?";
  const options = [
    { link: "/puzzle/wrong", text: "1" },
    { link: "/puzzle/wrong", text: "2" },
    { link: "/puzzle/wrong", text: "3" },
    { link: "/puzzle/3_win", text: "4" },
    { link: "/puzzle/wrong", text: "5" },
    { link: "/puzzle/wrong", text: "6" },
    { link: "/puzzle/wrong", text: "7" },
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
