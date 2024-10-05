import React from "react";
import { Hero } from "./Hero";
import { Event } from "./Event";
import { AboutHome } from "./AboutHome";
import { Galareya } from "./Galareya";
import { AboutHomeTwo } from "./AboutHomeTwo";
import { Personal } from "./Personal";
import { AboutHomeThree } from "./AboutHomeThree";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Event />
      <AboutHomeThree/>
      <Personal/>
      <AboutHomeTwo />
      <Galareya />
    </div>
  );
};
