import React from "react"
import BdayLayout from '../../base/bday_layout';


export default function Index(props) {
  return (
    <BdayLayout body_class="bday_vyom_2022" name="Vyom" link="/bday/vyom/2022">
        {props.children}
    </BdayLayout>
  )
}
