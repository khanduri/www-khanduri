import React from "react";
import {Polygon, Circle, Cross, Rect, Ellipse} from '../tools/shapes';

import {UpDown, UpDownWide, AnimationBounce, AnimationRect, AnimationVisible, AnimationSpin} from '../tools/animations';


import './sample.css';


// dense - colour - animation - thick
const DENSE_MAPPING = {
  high: {
    small:  [12, 1, 2, 5],
    medium: [ 4, 2, 1, 1],
    big:    [ 3, 3, 2, 1],
  },
  medium: {
    small:  [ 6, 5, 1, 3],
    medium: [ 2, 2, 1, 1],
    big:    [ 1, 1, 0, 1],
  },
  low: {
    small:  [ 3, 0, 1, 1],
    medium: [ 1, 0, 0, 0],
    big:    [ 0, 0, 0, 0],
  },
}

const COLOUR_LIST = ["#02a7fa", "#71e95f", "#f9780e", "#dd2525"];

const SHAPE_FUNC_MAP = {
  "Polygon": _gen_polygon, 
  "Circle": _gen_circle, 
  "Cross": _gen_cross, 
  "Rect": _gen_rect, 
  "Ellipse": _gen_ellipse,
};

var _vals = [];
for (var i = 0; i <= 100; i+=5){
  _vals.push(i)
}


function _gen_placement_class(){
  const t_placement = _vals[Math.floor(Math.random() * _vals.length)];
  const l_placement = _vals[Math.floor(Math.random() * _vals.length)];

  return "top-"+t_placement+" left-"+l_placement+" bg-shape"
}

function WrapSVGLayout(props) {
  
  return (
    <div key={props.key} className={_gen_placement_class()}>
      <UpDownWide>
        {props.children}
      </UpDownWide>
    </div>
  );
}

function _gen_polygon(key, size, colour, is_thick){
  const strokeWidth = (is_thick)? [5,6,7][Math.floor(Math.random() * 4)]: 3;

  const scale = {
    small: 1,
    medium: 3,
    big: 7,
  }[size];
  
  return (
    <WrapSVGLayout key={key}>
      <Polygon
        sides={Math.floor(Math.random() * 4) + 3} 
        strokeWidth={strokeWidth} 
        stroke={colour}
        r={((is_thick)? 30: 40) * scale} />
    </WrapSVGLayout>
  );
}
function _gen_circle(key, size, colour, is_thick){
  const strokeWidth = 20;

  const thick_colour = (is_thick)? ((colour)? colour: '#333'): null;

  const scale = {
    small: 1,
    medium: 3,
    big: 7,
  }[size];
  
  return (
    <WrapSVGLayout key={key}>
      <Circle
        strokeWidth={strokeWidth} 
        stroke={thick_colour}
        fill={thick_colour}
        radius={((is_thick)? 2: 4) * scale} />
    </WrapSVGLayout>
  );
}
function _gen_cross(key, size, colour, is_thick){
  
  const strokeWidth = 20;

  const thick_colour = (is_thick)? ((colour)? colour: '#333'): null;

  const scale = {
    small: 1,
    medium: 3,
    big: 7,
  }[size];
  
  return (
    <WrapSVGLayout key={key}>
      <Cross
        stroke={thick_colour}
        fill={thick_colour}
      />
    </WrapSVGLayout>
  );
}
function _gen_rect(key, size, colour, is_thick){
  return _gen_temp(key, colour);
}
function _gen_ellipse(key, size, colour, is_thick){
  return _gen_temp(key, colour);
}

function _gen_temp(key, colour){
  return (
    <div key={key} className={_gen_placement_class()}>
      <Polygon
        sides={3} 
        stroke={colour}
        strokeWidth={5} 
        r={90} />
    </div>
  )
  
}

function _generate(mapping, size){
  var [count, num_colour, num_animation, num_thick] = mapping;

  var generated = [];
  const shape_list = Object.keys(SHAPE_FUNC_MAP);
  const prob = (1 / count) * 3;
  for (var i = 1; i <= count; i++){
    const is_colour = (num_colour > 0 && Math.random() < prob);
    const is_animated = (num_animation > 0 && Math.random() < prob);
    const is_thick = (num_thick > 0 && Math.random() < prob);
    if (is_colour) num_colour--;
    if (is_animated) num_animation--;
    if (is_thick) num_thick--;

    const colour = (is_colour)? COLOUR_LIST[Math.floor(Math.random() * COLOUR_LIST.length)]: null;
    const strokeWidth = (is_thick)? [1,2][Math.floor(Math.random() * 2)]: [4,6,8][Math.floor(Math.random() * 3)];
    // const animation = (is_animated)? ANIMATION_LIST[Math.floor(Math.random() * ANIMATION_LIST.length)]: div;

    const shape = shape_list[Math.floor(Math.random() * shape_list.length)];
    const shape_func = SHAPE_FUNC_MAP[shape]
    const key = '_' + size + "_" + i;

    generated.push(
      shape_func(key, size, colour, is_thick)
    );
  }
  return generated;
}

export default function BackgroundPolygonComponent(props) {

  const density = props.density || 'high';
  const dense_mapping = DENSE_MAPPING[density];

  let shapes = [];
  shapes = shapes.concat(_generate(dense_mapping.small, 'small'));
  shapes = shapes.concat(_generate(dense_mapping.medium, 'medium'));
  shapes = shapes.concat(_generate(dense_mapping.big, 'big'));

  return (
    <section className="">
      {shapes}
      {/* <div className="top-90 left-50">
        <AnimationWave>
          <Polygon
            sides={3} 
            strokeWidth={5} 
            r={90} />
        </AnimationWave> 
      </div>

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
      </AnimationBounce>  */}
    </section>
  )
}