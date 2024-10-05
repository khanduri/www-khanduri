import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const title = "Puzzle 🤟";
  const instruction = "Toss the ball into a bucket!";
  const HINT_KEY = "chunko";

  const hint_question = "What comes next in the series: 2, 4, 8, 16, 32, __?";
  const options = [
    { link: "/puzzle/wrong", text: "48" },
    { link: "/puzzle/wrong", text: "38" },
    { link: "/puzzle/wrong", text: "46" },
    { link: "/puzzle/3_win", text: "64" },
    { link: "/puzzle/wrong", text: "128" },
    { link: "/puzzle/wrong", text: "16" },
    { link: "/puzzle/wrong", text: "60" },
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
