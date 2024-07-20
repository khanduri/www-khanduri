import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "kichki michki";

  const title = "Puzzle ☝";
  const instruction =
    "From the space encyclopedia pick a topic and teach it to Vyom. Vyom has to present that topic to everyone.";
  const hint_question = "What is the largest planet in our solar system?";
  const options = [
    { link: "/puzzle/wrong", text: "Mercury" },
    { link: "/puzzle/wrong", text: "Venus" },
    { link: "/puzzle/wrong", text: "Earth" },
    { link: "/puzzle/wrong", text: "Mars" },
    { link: "/puzzle/1_win", text: "Jupiter" },
    { link: "/puzzle/wrong", text: "Saturn" },
    { link: "/puzzle/wrong", text: "Uranus" },
    { link: "/puzzle/wrong", text: "Neptune" },
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
