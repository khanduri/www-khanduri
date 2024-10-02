import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const HINT_KEY = "captain poop maker";

  const title = "Puzzle 🖖";
  const instruction =
    "Vyom has to draw a superhero and Sehul has to draw a supervillain. Then they have to tell a story about them.";
  const hint_question =
    "What is the name of the superhero who can swing and crawl / climb walls?";
  const options = [
    { link: "/puzzle/wrong", text: "Superman" },
    { link: "/puzzle/wrong", text: "Batman" },
    { link: "/puzzle/4_win", text: "Spider-Man" },
    { link: "/puzzle/wrong", text: "Wonder Woman" },
    { link: "/puzzle/wrong", text: "Iron Man" },
    { link: "/puzzle/wrong", text: "Captain America" },
    { link: "/puzzle/wrong", text: "The Flash" },
    { link: "/puzzle/wrong", text: "Black Panther" },
    { link: "/puzzle/wrong", text: "Thor" },
    { link: "/puzzle/wrong", text: "Hulk" },
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
