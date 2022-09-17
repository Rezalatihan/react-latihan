import React from "react";
import Cardd from "./component/cardd/Cardd";
import Banner from "./component/carosel/Banner";
import Content from "./component/Content";
import Footer from "./footer/Footer";
import Forms from "./forms/Forms";
import Navbarcomp from "./navbar/Navbarcomp";

function Indexportfolio() {
  return (
    <div>
      <Navbarcomp />
      <Banner />
      <Content />
      <Cardd />
      <Forms />
      <Footer />
    </div>
  );
}

export default Indexportfolio;
