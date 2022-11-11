import Logo from './Logo';
import Background from './Background';
import Description from './Description';
import Illustration from './Illustration';
import Footer from './Footer';
import PatternOne from './PatternOne';

function LandingPageEz() {
  return (
    <div className="font-equalizer relative overflow-hidden tablet:p-7 tablet:pt-16 desktop:px-36">
      <Logo />
      <Background />
      <PatternOne />

      <Description />

      <Illustration />

      <Footer />
    </div>
  );
}

export default LandingPageEz;
