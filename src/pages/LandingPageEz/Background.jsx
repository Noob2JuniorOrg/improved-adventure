import bgMobile from './assets/bg-main-mobile.png';
import bgTablet from './assets/bg-main-tablet.png';
import bgDesktop from './assets/bg-main-desktop.png';

function Background() {
  return (
    <>
      <img
        className="absolute -top-40 -right-28 -z-10 tablet:hidden desktop:hidden"
        src={bgMobile}
      />
      <img
        className="hidden tablet:inline desktop:hidden -z-10 absolute -top-28 -left-40"
        src={bgTablet}
      />
      <img
        className="hidden desktop:inline -z-10 absolute -top-36 -left-16"
        src={bgDesktop}
      />
    </>
  );
}

export default Background;
