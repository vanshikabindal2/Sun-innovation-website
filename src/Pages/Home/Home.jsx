
import React, {useState}from "react";
// import {
//   FiArrowDown,
//   FiSend,
//   FiMonitor,
//   FiPenTool,
//   FiTrendingUp,
//   FiServer,
// } from "react-icons/fi";
// import background from "../../assets/background.png";
import "./Home.css";
import Trusted from "../Trustedcompany/Trusted";
import Whychoose from "../Whychooseus/Whychoose";
import Skills from "../Skills/Skills";
import Achievement from "../Achievement/Achievement";
import Testimonial from "../Testimonial/Testimonial";

import Homee from "../Homee/Homee";


const Home = () => {
 
  return (
    <>
<Homee/>

  <Trusted/>
{/* why choose  us */}
<Whychoose/>
{/* skills */}

<Skills/>
{/*Achievement */}
<Achievement/>
<Testimonial/>
</>




  );
};

export default Home;
