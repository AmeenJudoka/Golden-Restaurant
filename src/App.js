import React from 'react';

import AboutUs from './container/AboutUs/AboutUs.jsx';
import Header from './container/Header/Header.jsx';
import SpecialMenu from './container/Menu/SpecialMenu.jsx';
import Intro from './container/Intro/Intro.jsx';
import Chef from './container/Chef/Chef.jsx';
import Laurels from './container/Laurels/Laurels.jsx';
import Gallery from './container/Gallery/Gallery.jsx';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
