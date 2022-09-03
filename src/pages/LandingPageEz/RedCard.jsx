import appleIcon from './assets/icon-apple.svg';
import androidIcon from './assets/icon-android.svg';
import DownloadButton from './DownloadButton';

function RedCard() {
  return (
    <div className="mt-16 flex flex-col justify-between px-7 pt-10 pb-8 tablet:px-12 tablet:pb-12 text-eqr-light w-full h-[546px] bg-eqr-red rounded-xl tablet:w-[57%] desktop:w-[41%] tablet:h-[546px] desktop:h-[625px] tablet:relative tablet:left-64 tablet:bottom-80 desktop:left-[570px] desktop:bottom-[460px]">
      <h2 className="text-4xl font-bold desktop:text-[40px] desktop:leading-[52px]">
        Premium EQ
      </h2>
      <p className="tablet:text-lg desktop:text-[20px] desktop:leading-[34px]">
        Get expert-level control with a robust equaliser, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className="flex items-center">
        <h3 className="font-bold text-6xl mr-3">$4</h3>
        <p> /month </p>
      </div>
      <div>
        <DownloadButton
          className="mb-3 bg-eqr-dark text-eqr-light hover:bg-[#66E2DC] hover:text-white"
          title="iOS"
          icon={appleIcon}
        />
        <DownloadButton
          className="bg-eqr-light text-eqr-dark hover:bg-[#FFB964] hover:text-eqr-dark"
          title="Android"
          icon={androidIcon}
        />
      </div>
    </div>
  );
}

export default RedCard;
