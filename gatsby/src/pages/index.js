import React from "react";
import About from "../components/about";
import Learn from "../components/learn";


export default () => (
  <div>
    <About background_density={"high"}/>
    <Learn />
    <About background_density={"low"}/>
    <About background_density={"low"}/>
    <About />
    <About />
    <About background_density={"medium"}/>
    <About background_density={"medium"}/>
    <About />
    <About background_density={"high"}/>

    {/* <div id='about'></div>
    <div id='learn'></div>
    <div id='experience'></div>
    <div id='education'></div>
    <div id='activities'></div>
    <div id='contact'></div> */}

  </div>
)