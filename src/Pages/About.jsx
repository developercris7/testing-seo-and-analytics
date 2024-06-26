import React from "react";
import Navbar from "../Components/Navbar";
import useMixpanelPageTrack from "../Hooks/useMixpanelPageTrack";
import { Helmet } from "react-helmet";

const About = () => {
  useMixpanelPageTrack("About");
  return (
    <div>
      <Helmet>
        <title>About - Testing SEO & Analytics</title>
        <meta
          content="Welcome to the aboutpage of Testing SEO and analytics"
          name="description"
        />
        <link rel="canonical" href="https://testing-seo.netlify.app/about" />
        <meta
          property="og:description"
          content="About - The best way of Implementing SEO and analytical tools"
        />
        <meta
          property="og:title"
          content="About - Explore SEO Testing and analytics"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?size=626&ext=jpg&ga=GA1.2.850801138.1718702573&semt=sph"
        />
        <meta
          property="og:url"
          content="https://testing-seo.netlify.app/about"
        />
      </Helmet>
      <Navbar />
      <h1>Welcome to the about page of SEO testing</h1>
    </div>
  );
};

export default About;
