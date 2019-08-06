import React from "react";

import { keyframes, css } from "@emotion/core"
import styled from "@emotion/styled"


const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(60px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(500px);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`




const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
 
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
 
  70% {
    transform: translate3d(0, -15px, 0);
  }
 
  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const AnimationBounce = styled.div`
animation: ${bounce} 10s ease infinite;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`


const rectBorder = keyframes`
    0%   {top: 0px; left: 0px; }
    25%  {top: 0px; left: 100px; }
    50%  {top: 100px; left: 100px; }
    75%  {top: 100px; left: 0px; }
    100% {top: 0px; left: 0px; }
`


const visibility = keyframes`
0%   { opacity: 0; }
25%   { opacity: 0.5; }
50%   { opacity: 1; }
75%   { opacity: 0.5; }
100% { opacity: 0; }
`

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AnimationWave = styled.div`
animation: ${spinning} 5s ease infinite;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
`


{/* <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
<ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

<line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
<polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
    stroke="orange" fill="transparent" stroke-width="5"/>

<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
    stroke="green" fill="transparent" stroke-width="5"/>

<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg> */}