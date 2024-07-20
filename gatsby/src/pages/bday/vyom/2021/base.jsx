import React from "react"
import BdayLayout from '../../base/bday_layout';


export default function Index(props) {
  return (
    <BdayLayout body_class="bday_vyom_2021" name="Vyom" link="/bday/vyom/2021">
        {props.children}
    </BdayLayout>
  )
}
