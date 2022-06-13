import React from "react";

import "./style.css"
import Campaigns from "./components/Campaigns";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Favorites from "./components/Favorits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApps";


function App() {
  return (
    <div >
      <Header/> 
      <HeroSection/>
      <Categories/>
      <Campaigns/>
      <Favorites/>
      <MobileApp/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
