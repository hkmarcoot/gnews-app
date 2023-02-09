import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HomeHeroSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default HomePage;
