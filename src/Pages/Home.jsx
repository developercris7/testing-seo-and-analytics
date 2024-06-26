import React from "react";
import Navbar from "../Components/Navbar";
import useMixpanelPageTrack from "../Hooks/useMixpanelPageTrack";
import { Helmet } from "react-helmet";

const Home = () => {
  useMixpanelPageTrack("Home");

  return (
    <div>
      <Helmet>
        <title>Home - Testing SEO & Analytics</title>
        <meta
          content="Welcome to the homepage of Testing SEO and analytics"
          name="description"
        />
        <link rel="canonical" href="https://testing-seo.netlify.app/" />

        <meta property="og:title" content="Explore SEO Testing and analytics" />
        <meta
          property="og:description"
          content="The best way of Implementing SEO and analytical tools"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/bearded-casual-traveler-male-sits-step-using-tablet-pc_613910-1928.jpg?size=626&ext=jpg&ga=GA1.2.850801138.1718702573&semt=sph"
        />
        <meta property="og:url" content="https://testing-seo.netlify.app/" />
        <meta property="og:type" content="website" />

      </Helmet>
      <Navbar />
      <h1>Testing SEO home</h1>
      <p>Welcome to the Home page of SEO Testing</p>
    </div>
  );
};

export default Home;
