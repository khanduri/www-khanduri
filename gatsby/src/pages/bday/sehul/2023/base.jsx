import React from "react";
import BdayLayout from "../../base/bday_layout";

import { base_link, base_class } from "./constants";

export default function Index(props) {
  return (
    <BdayLayout body_class={base_class} name="Sehul" link={base_link}>
      {props.children}
    </BdayLayout>
  );
}
