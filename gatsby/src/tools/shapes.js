import React from "react";


const _default_black = '#333';
const _default_fill = "none";



export function Polygon(props){

  const scale = props.scale || 0.4;
  const rotate = props.rotate || 0;

  const fill = props.fill || _default_fill;
  const stroke = props.stroke || _default_black;
  const strokeWidth = props.strokeWidth || 1;
  const width = ((props.width || props.r * 2) + strokeWidth) * scale;
  
  const radius = (props.r - strokeWidth) * scale;
  const sides = props.sides;

  const cx = (props.cx || radius) + (strokeWidth);
  const cy = (props.cy || radius) + (strokeWidth);

  var points = [];
  for (let i = 1; i <= sides; i++) {
    
    points.push({
      x: Math.floor(Math.max(cx + Math.round(radius * Math.sin((Math.PI / (sides / 2)) * i)), 0)),
      y: Math.floor(Math.max(cy + Math.round(radius * Math.cos((Math.PI / (sides / 2)) * i)), 0))
    });
  }

  const pointsString = points.reduce(function(accStr, point){
    return accStr + `${point.x},${point.y} `;
  }, '');

  return (
    <svg 
      width={width+(strokeWidth*2)} height={width+(strokeWidth*2)} transform={`rotate(${rotate})`} top={props.top || 0} left={props.left || 0}>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>

        <filter id="dropShadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
    <feOffset dx="1" dy="1" />
    <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

        <polygon
          shapeRendering="optimizeSpeed"
          points={pointsString}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          filter="url(#blur)"
        />
    </svg>
  );
}



export function Cross(props){

  const rotate = props.rotate || 0;

  const fill = props.fill || _default_fill;
  const stroke = props.stroke || _default_black;
  const strokeWidth = props.strokeWidth || 1;
  const width = 100; // TODO: think about how to dynamically create this shape (scale also missing)

  return (
    <svg width={width} height={width} transform={`rotate(${rotate})`}  top={props.top || 0} left={props.left || 0}>
      <path
        shapeRendering="optimizeSpeed"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    </svg>
  );
}



export function Rect(props){

  const scale = props.scale || 1;
  const rotate = props.rotate || 0;

  const fill = props.fill || _default_fill;
  const stroke = props.stroke || _default_black;
  const strokeWidth = props.strokeWidth || 1;
  const radius = props.radius * scale;
  const width = ((props.width || 100) + strokeWidth) * scale;
  const height = ((props.height || 100) + strokeWidth) * scale;
  

  return (
    <svg width={width+(strokeWidth*2)} height={height+(strokeWidth*2)} transform={`rotate(${rotate})`}  top={props.top || 0} left={props.left || 0}>
      <rect 
        shapeRendering="optimizeSpeed"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        width={width}
        height={height} 
        x={strokeWidth}
        y={strokeWidth}
        rx={radius} />
    </svg>
  );
}



export function Ellipse(props){
  const scale = props.scale || 1;
  
  const fill = props.fill || _default_fill;
  const stroke = props.stroke || _default_black;
  const strokeWidth = props.strokeWidth || 1;
  
  const rx = props.rx * scale;
  const ry = props.ry * scale;
  const width = (props.cx + strokeWidth) * 2 * scale;
  const height = (props.cy + strokeWidth) * 2 * scale;

  const cx = (props.cx + strokeWidth) * scale;
  const cy = (props.cy + strokeWidth) * scale;

  return (
    <svg width={width} height={height} top={props.top || 0} left={props.left || 0}>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>

      <ellipse
        shapeRendering="optimizeSpeed"
        cx={cx} cy={cy} 
        rx={rx} ry={ry} 
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        filter="url(#blur)"
      />
    </svg>
  );
}



export function Circle(props){
  const c = props.radius + ((props.strokeWidth || 1) * 3);

  return (
    <Ellipse 
      cx={c} cy={c} 
      rx={c} ry={c} 
      scale={props.scale}
      radiius={props.radius}
      fill={props.fill}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
    />
  )
}
