import React from "react";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Collection from "./components/Collection";
import Spotted from "./components/Spotted";
import PurityInstagram from "./components/Purity";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Hero />
      <Category />
      <Collection />
      <Spotted />
      <PurityInstagram />
      <Newsletter /> 
      <Footer />
    </div>

  );
}
