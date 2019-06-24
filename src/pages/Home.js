import React from 'react';

import JumbotronHome from '../components/Home/JumbotronHome';
import SectionA from '../components/Home/SectionA';
import SectionB from '../components/Home/SectionB';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <JumbotronHome />
      <SectionA />
      <SectionB />

      <ContactForm />
      <Footer />
    </>
  );
}
