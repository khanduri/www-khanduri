import React from "react";
import BdayLayout from "../base";

import { base_link, base_class, BDayForm } from "../constants";

export default function Index() {
  const title = "Puzzle ☝";

  const instruction =
    "Impersonate a character from your favorite book, movie or cartoon";
  const HINT_KEY = "harry puttar";

  const hint_question =
    "If it's 3:15pm now, what time will it be in exactly 3 hours and 45 minutes?";
  const options = [
    { link: "/puzzle/wrong", text: "6:45 pm" },
    { link: "/puzzle/wrong", text: "7:00 am" },
    { link: "/puzzle/1_win", text: "7:00 pm" },
    { link: "/puzzle/wrong", text: "3:45 pm" },
    { link: "/puzzle/wrong", text: "12:15 am" },
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
