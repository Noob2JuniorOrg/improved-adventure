import bgMobile from './images/mobile/image-hero.jpg';
import bgDesktop from './images/desktop/image-hero.jpg';

function Background() {
  return (
    <>
      <img className="desktop:hidden -z-10 absolute" src={bgMobile} />
      <img className="hidden -z-10 absolute desktop:inline" src={bgDesktop} />
    </>
  );
}

export default Background;
