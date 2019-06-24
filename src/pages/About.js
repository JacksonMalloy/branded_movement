import React from 'react';

import JumbotronAbout from '../components/About/JumbotronAbout';
import AboutUs from '../components/About/AboutUs';
import ServiceList from '../components/About/ServiceList';

import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <JumbotronAbout />
      <AboutUs />
      <ServiceList />

      <Footer />
    </>
  );
}
