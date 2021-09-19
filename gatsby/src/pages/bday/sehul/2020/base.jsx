import React from "react"
import BdayLayout from '../../base/bday_layout';


export default function Index(props) {
  return (
    <BdayLayout body_class="bday_sehul_2020" name="Sehul" link="/bday/sehul/2020">
        {props.children}
    </BdayLayout>
  )
}
