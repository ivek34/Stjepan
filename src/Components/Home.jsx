import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import Kontakt from "./Kontakt";
import backImage from "../assets/back.png"
import ONama from "./ONama";

const Home = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1000);
    const contentTimer = setTimeout(() => setContentVisible(true), 2000);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <img src={backImage} alt="Background" className="responsive-image" />
          <Navbar />
        </div>
        <header className="home-header">
          <h1 className={`home-title ${titleVisible ? "fade-in" : ""}`}>
            STJEPAN ŠTEFINOVEC
          </h1>
          <h2 className={`home-subtitle ${subtitleVisible ? "fade-in" : ""}`}>
            VRIJEME ZA NOVOG GRADONAČELNIKA!
          </h2>
        </header>
        <ONama />
      </div>
      <Kontakt />
      <Footer />
    </>
  );
};

export default Home;
