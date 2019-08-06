import React from "react";
import About from "../components/about";
import Learn from "../components/learn";
import Experience from "../components/experience";

import PageLayout from "../common/layout";


export default () => (
  <PageLayout>
    <About background_density={"high"}/>
    <Learn />
    <Experience />
    <About background_density={"low"}/>
    <About background_density={"low"}/>
    <About />
    <About />
    <About background_density={"medium"}/>
    <About background_density={"medium"}/>
    <About />
    <About background_density={"high"}/>

    {/* 
    <div id='education'></div>
    <div id='activities'></div>
    <div id='contact'></div> 
    */}

  </PageLayout>
)