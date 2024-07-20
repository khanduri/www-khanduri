import React from "react";
import BdayLayout from "../base";

import { base_link, base_class, BDayForm } from "../constants";

export default function Index() {
  const HINT_KEY = "kichki michki";

  const title = "Puzzle ☝";
  const instruction = "Pick your favorite book and read 2 paragraphs.";
  const hint_question = "Who is the Prime Minister of India 🇮🇳 ?";
  const options = [
    { link: "/puzzle/wrong", text: "Mahendra Sodhi" },
    { link: "/puzzle/wrong", text: "Gajendra Jobhi" },
    { link: "/puzzle/wrong", text: "Sabji and Gobhi" },
    { link: "/puzzle/wrong", text: "Marendra Nodi" },
    { link: "/puzzle/1_win", text: "Narendra Modi" },
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
