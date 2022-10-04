import Creation from './Creation';
import earthPic from './images/mobile/image-deep-earth.jpg';
import arcadePic from './images/mobile/image-night-arcade.jpg';
import soccerPic from './images/mobile/image-soccer-team.jpg';
import gridPic from './images/mobile/image-grid.jpg';
import abovePic from './images/mobile/image-from-above.jpg';
import borealisPic from './images/mobile/image-pocket-borealis.jpg';
import curiosityPic from './images/mobile/image-curiosity.jpg';
import fisheyePic from './images/mobile/image-fisheye.jpg';

import earthPicDt from './images/desktop/image-deep-earth.jpg';
import arcadePicDt from './images/desktop/image-night-arcade.jpg';
import soccerPicDt from './images/desktop/image-soccer-team.jpg';
import gridPicDt from './images/desktop/image-grid.jpg';
import abovePicDt from './images/desktop/image-from-above.jpg';
import borealisPicDt from './images/desktop/image-pocket-borealis.jpg';
import curiosityPicDt from './images/desktop/image-curiosity.jpg';
import fisheyePicDt from './images/desktop/image-fisheye.jpg';

function OurCreations() {
  return (
    <>
      <div className="desktop:hidden mt-28">
        <h2 className="font-loopbig text-center uppercase text-[32px] leading-[32px]">
          Our creations
        </h2>
        <div className="mt-10 flex flex-col justify-between h-[1150px]">
          <Creation title="Deep Earth" image={earthPic} />
          <Creation title="Night arcade" image={arcadePic} />
          <Creation title="Soccer team VR" image={soccerPic} />
          <Creation title="The grid" image={gridPic} />
          <Creation title="From up above VR" image={abovePic} />
          <Creation title="Pocket borealis" image={borealisPic} />
          <Creation title="The Curiosity" image={curiosityPic} />
          <Creation title="Make it fisheye" image={fisheyePic} />
        </div>
        <button className="block m-auto border border-black uppercase font-loopsmall text-[14px] leading-[14px] tracking-[5px] mt-7 p-3 w-[157px] hover:bg-black hover:text-white">
          See all
        </button>
      </div>

      <div className="hidden desktop:block mt-44">
        <div className="flex justify-between items-center">
          <h2 className="uppercase font-loopbig text-[48px] leading-[48px]">
            Our creations
          </h2>
          <button className="w-[157px] h-[40px] border border-black font-loopbig uppercase text-[14px] leading-[14px] trailing-[5px] p-3 hover:bg-black hover:text-white">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-between mt-20">
          <Creation title="Deep Earth" image={earthPicDt} />
          <Creation title="Night arcade" image={arcadePicDt} />
          <Creation title="Soccer team VR" image={soccerPicDt} />
          <Creation title="The grid" image={gridPicDt} />
          <Creation title="From up above VR" image={abovePicDt} />
          <Creation title="Pocket borealis" image={borealisPicDt} />
          <Creation title="The Curiosity" image={curiosityPicDt} />
          <Creation title="Make it fisheye" image={fisheyePicDt} />
        </div>
      </div>
    </>
  );
}

export default OurCreations;
