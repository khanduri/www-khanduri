import React from "react";
import BdayLayout from "./../base";

import { base_link, base_class, BDayForm } from "./../constants";

export default function Index() {
  const title = "Puzzle 🖐";
  const instruction = "Learn a new word and explain what it means.";
  const HINT_KEY = "dhipri man";

  const hint_question =
    "We'll be learning about a simple alphanumeric cipher .. Use the code where A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=10, K=11, L=12, M=13, N=14, O=15, P=16, Q=17, R=18, S=19, T=20, U=21, V=22, W=23, X=24, Y=25, Z=26 and crack this message: 4-8-9-16-18-9";
  const options = [
    { link: "/puzzle/wrong", text: "kichki" },
    { link: "/puzzle/wrong", text: "michki" },
    { link: "/puzzle/wrong", text: "vishwa" },
    { link: "/puzzle/5_win", text: "dhipri" },
    { link: "/puzzle/wrong", text: "tingly" },
    { link: "/puzzle/wrong", text: "poopoy" },
    { link: "/puzzle/wrong", text: "noiece" },
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
