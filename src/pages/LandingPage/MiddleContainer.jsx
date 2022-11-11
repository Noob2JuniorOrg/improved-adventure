import picMobile from './images/mobile/image-interactive.jpg';
import picDesktop from './images/desktop/image-interactive.jpg';

function MiddleContainer() {
  return (
    <div className="mt-[100%] relative desktop:mt-72">
      <img className="desktop:hidden" src={picMobile} />
      <img className="hidden desktop:inline" src={picDesktop} />
      <div className="px-5 pt-10 text-center desktop:text-left bg-white desktop:w-1/2 desktop:h-2/3 desktop:absolute desktop:right-0 desktop:bottom-0 desktop:pr-0 desktop:pl-28 desktop:pt-28">
        <h2 className="font-loopbig uppercase text-[32px] leading-[32px] desktop:text-[48px] desktop:leading-[48px]">
          The leader in interactive VR
        </h2>
        <p className="font-loopsmall text-[15px] leading-[25px] mt-4">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default MiddleContainer;
