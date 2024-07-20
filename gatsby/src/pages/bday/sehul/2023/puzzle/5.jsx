import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "candy time";

  const title = "Puzzle 🖐";
  const instruction =
    "Sehul and Vyom have to collect a few candies and share them with everyone in the house.";
  const hint_question =
    "Which festival in India is known as the festival of lights and symbolizes the victory of light over darkness?";
  const options = [
    { link: "/puzzle/wrong", text: "Navratri" },
    { link: "/puzzle/wrong", text: "Durga Puja" },
    { link: "/puzzle/wrong", text: "Raksha Bandhan" },
    { link: "/puzzle/wrong", text: "Onam" },
    { link: "/puzzle/wrong", text: "Holi" },
    { link: "/puzzle/wrong", text: "Janmashtami" },
    { link: "/puzzle/wrong", text: "Dussehra" },
    { link: "/puzzle/5_win", text: "Diwali" },
    { link: "/puzzle/wrong", text: "Ganesh Chaturthi" },
    { link: "/puzzle/wrong", text: "Pongal" },
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
