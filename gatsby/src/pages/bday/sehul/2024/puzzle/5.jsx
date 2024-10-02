import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "dhipri man";

  const title = "Puzzle 🖐";
  const instruction =
    "Collect 5 animal toys, give them to 5 different people and ask them to make the animal noise.";
  const hint_question =
    "On this day, Ayomi will tie a sacred thread around Vyom's and Sehul's wrist, symbolizing their love, protection, and prayers for their well-being. What day is it?";
  const options = [
    { link: "/puzzle/wrong", text: "Navratri" },
    { link: "/puzzle/wrong", text: "Durga Puja" },
    { link: "/puzzle/wrong", text: "Diwali" },
    { link: "/puzzle/5_win", text: "Raksha Bandhan" },
    { link: "/puzzle/wrong", text: "Onam" },
    { link: "/puzzle/wrong", text: "Holi" },
    { link: "/puzzle/wrong", text: "Janmashtami" },
    { link: "/puzzle/wrong", text: "Dussehra" },
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
