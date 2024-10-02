import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "tingley tingley";

  const title = "Puzzle ✌";
  const instruction = "Draw a circle, quare, triangle, cat, ball, sun!";
  const hint_question = "Which part of the plant grows under the ground?";
  const options = [
    { link: "/puzzle/wrong", text: "stem" },
    { link: "/puzzle/wrong", text: "flower" },
    { link: "/puzzle/wrong", text: "leaf" },
    { link: "/puzzle/wrong", text: "fruit " },
    { link: "/puzzle/2_win", text: "root" },
    { link: "/puzzle/wrong", text: "bud" },
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
