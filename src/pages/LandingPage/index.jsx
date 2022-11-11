import Background from './Background';
import Footer from './Footer';
import Header from './Header';
import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
import OurCreations from './OurCreations';
import Menu from './Menu';
import { useState } from 'react';

function LandingPage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuIsOpen(true);
  };

  const closeMenuHandler = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="relative">
      {menuIsOpen && <Menu onClose={closeMenuHandler} />}

      <Background />
      <div className="px-5 pt-10 desktop:px-40 desktop:pt-20">
        <Header onOpen={openMenuHandler} />
        <TopContainer />
        <MiddleContainer />
        <OurCreations />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
