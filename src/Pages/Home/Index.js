import React from "react";
import CartoonAnimate from "./3dAnimation/CartoonAnimate";
import Fixedbg from "../Home/Background/Fixedbg";
import Contact from "./Contact/Contact";
import FounderIndex from "./FoundersPage/FounderIndex";
import Intro from "./Intro/Intro";
import SliderLogo from "./PartnersLogos";
import Navbar from "../../Components/Navbar/Navbar";
import MobileScroll from "./MobileScroll/MobileScroll";

const Index = () => {
  return (
    <>
      <Navbar/>
      <Intro />
      <MobileScroll/>
      <CartoonAnimate />
      <SliderLogo />
      <Fixedbg />
      <FounderIndex />
      <Contact />
    </>
  );
};

export default Index;
