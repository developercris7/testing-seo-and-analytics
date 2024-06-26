import React from "react";
import Navbar from "../Components/Navbar";
import useMixpanelPageTrack from "../Hooks/useMixpanelPageTrack";
import { Helmet } from "react-helmet";
const Services = () => {
  useMixpanelPageTrack("Services");

  return (
    <div>
      <Helmet>
        <title>Services - Testing SEO & Analytics</title>
        <meta
          content="Welcome to the services page of Testing SEO and analytics"
          name="description"
        />
        <link rel="canonical" href="https://testing-seo.netlify.app/services" />
        <meta
          property="og:description"
          content="Services - The best way of Implementing SEO and analytical tools"
        />
        <meta
          property="og:title"
          content="Services - Explore SEO Testing and analytics"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?size=626&ext=jpg&ga=GA1.2.850801138.1718702573&semt=sph"
        />
        <meta
          property="og:url"
          content="https://testing-seo.netlify.app/services"
        />
      </Helmet>
      <Navbar />
      <h1>Welcome to the services page of SEO testing</h1>
    </div>
  );
};

export default Services;
