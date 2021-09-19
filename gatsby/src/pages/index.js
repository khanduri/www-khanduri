import React from "react";
import About from "../components/content/about";
import Learn from "../components/content/learn";
import Experience from "../components/content/experience";
import Education from "../components/content/education";
import Activities from "../components/content/projects";
import Hero from "../components/content/hero";
import Footer from "../components/content/footer";
import Navigation from "../components/content/navigation";

import PageLayout from "../common/layout";

import "../styles/main.scss";

export default () => (
  <PageLayout>
    <Navigation />
    <div className="slant slant-bottom-left-primary"></div>
    <Hero />
    <div className="slant slant-top-right-primary"></div>
    <About />
    <div className="slant slant-bottom-left-primary"></div>
    <Learn />
    <Experience />
    <div className="slant slant-top-left-primary"></div>
    <Activities />
    <div className="slant slant-bottom-right-primary"></div>
    <Education/>
    <Footer />
  </PageLayout>
)