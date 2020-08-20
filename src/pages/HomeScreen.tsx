import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Jumbotron from "../components/Jumbotron";
import AboutMeSection from "../components/AboutMeSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import { HangingPlant } from "../images/HangingPlant";
import { HangingPlantSmall } from "../images/HangingPlantSmall";
import { fonts, colors, screens } from "../utils/theme";

const HomeScreen = () => (
  <Layout>
    <SEO title="Home" />
    {screen.width <= parseInt(screens.md) ? (
      <HangingPlantSmall
        style={{
          position: "absolute",
          top: 0,
          right: "16px",
          zIndex: -1,
        }}
      />
    ) : (
      <HangingPlant
        style={{
          position: "absolute",
          top: -3,
          right: 0,
          zIndex: -1,
        }}
      />
    )}
    <Jumbotron />
    <AboutMeSection />
    <WorkSection />
    <ContactSection />
  </Layout>
);

export default HomeScreen;
