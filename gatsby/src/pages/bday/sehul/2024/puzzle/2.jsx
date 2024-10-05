import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const title = "Puzzle ✌";
  const instruction =
    "Both you and Vyom have to pretend to jump rope for about 30 seconds. Chacha will shout STATUE for you to remain statue for 10 seconds!";
  const HINT_KEY = "top spin";

  const hint_question =
    "How many stairs do we have in our house? Count from pooja room to the basement.";
  const options = [
    { link: "/puzzle/wrong", text: "112" },
    { link: "/puzzle/wrong", text: "50" },
    { link: "/puzzle/wrong", text: "20" },
    { link: "/puzzle/2_win", text: "68" },
    { link: "/puzzle/wrong", text: "79" },
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
