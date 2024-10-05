import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const title = "Puzzle 🖖";
  const instruction =
    "Tell a fact about Mahatma Gandhi's role in India's independence.";
  const HINT_KEY = "poopy boys";

  const hint_question =
    "Which Indian festival celebrates the victory of light over darkness?";
  const options = [
    { link: "/puzzle/wrong", text: "Holi" },
    { link: "/puzzle/wrong", text: "Durga Puja" },
    { link: "/puzzle/wrong", text: "Navratri" },
    { link: "/puzzle/wrong", text: "Pongal" },
    { link: "/puzzle/wrong", text: "Onam" },
    { link: "/puzzle/wrong", text: "Makar Sankranti" },
    { link: "/puzzle/4_win", text: "Diwali" },
    { link: "/puzzle/wrong", text: "Raksha Bandhan" },
    { link: "/puzzle/wrong", text: "Baisakhi" },
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
