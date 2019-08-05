import React from "react";
import {Polygon, Circle, Cross, Rect, Ellipse} from '../tools/shapes';

import {UpDown, UpDownWide, AnimationBounce, AnimationWave} from '../tools/animations';


export default function SampleComponent(props) {
  return (
    <section className="content-section text-center about">
      <AnimationWave>
        <Polygon 
          sides={3} 
          strokeWidth={5} 
          r={90} />
      </AnimationWave> 

      <UpDownWide>
        <Ellipse 
          cx={100}
          cy={30}
          rx={60}
          ry={20}
          strokeWidth={2}
        />
      </UpDownWide> 

      <UpDown>
        <Circle
          strokeWidth={5} 
          stroke={"#02a7fa"}
          radius={40} />
      </UpDown>

      <UpDown>
        <Polygon 
          sides={5} 
          strokeWidth={3} 
          stroke={"#71e95f"}
          r={150} />        
      </UpDown>

      <UpDown>
        <Rect
          radius={20}
          stroke={"#f9780e"}
          strokeWidth={5} 
        />
      </UpDown>

      <AnimationBounce> 
        <Cross
          stroke={"#dd2525"}
        />
      </AnimationBounce> 

    </section>
  )
}