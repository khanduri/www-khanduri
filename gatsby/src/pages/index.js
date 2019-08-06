import React from "react";
import About from "../components/about";
import Learn from "../components/learn";
import Experience from "../components/experience";
import Education from "../components/education";
import Activities from "../components/projects";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

import PageLayout from "../common/layout";


export default () => (
  <PageLayout>
    <Navigation />
    <div className="slant slant-bottom-left-primary"></div>
    <Hero background_density={"medium"}/>
    <div className="slant slant-top-right-primary"></div>
    <About background_density={"medium"}/>
    <Learn />
    <Experience />
    <Education background_density={"low"}/>
    <Activities />
    <Footer />
  </PageLayout>
)