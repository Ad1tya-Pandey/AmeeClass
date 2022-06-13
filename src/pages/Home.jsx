import React, { Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};

export default Home;
