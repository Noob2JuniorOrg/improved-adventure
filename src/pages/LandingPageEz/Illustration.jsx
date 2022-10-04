import patternTwo from './assets/bg-pattern-2.svg';
import phonePic from './assets/Illustration-app.png';
import RedCard from './RedCard';

function Illustration() {
  return (
    <div className="relative -z-10 mt-24 w-full tablet:m-auto tablet:mt-28">
      <div className="w-full h-[700px] bg-eqr-dark rounded-xl absolute top-28 -z-10 tablet:top-36 tablet:h-[50%] desktop:top-40">
        <img
          className="w-3/4 m-auto tablet:absolute tablet:right-48 tablet:-top-8 tablet:w-[40%] desktop:w-[28%] desktop:left-2 desktop:-top-8"
          src={patternTwo}
        />
      </div>
      <img
        className="w-[55%] m-auto tablet:w-[39%] tablet:ml-14 desktop:w-[28%] desktop:ml-20"
        src={phonePic}
      />
      <RedCard />
    </div>
  );
}

export default Illustration;
