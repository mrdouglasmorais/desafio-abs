import React from 'react';

import Navbar from './components/navbar';
import Bundle from './components/bundle';
import Footer from './components/footer';
import SectionOne from './sections/sectionOne';
import SectionTwo from './sections/sectionTwo';
import SectionThree from './sections/sectionThree';
import SectionFour from './sections/sectionFour';
import SectionFive from './sections/sectionFive';

function App() {
  return (
    <>
      <Navbar />
        <Bundle />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      <Footer />
    </>
  );
}

export default App;
