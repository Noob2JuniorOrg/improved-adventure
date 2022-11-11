import patternPic from './assets/bg-pattern-1.svg';

function PatternOne() {
  return (
    <img
      className="w-[267px] h-[400px] hidden tablet:inline absolute -top-10 -right-10 desktop:w-[312px] desktop:h-[468px] desktop:right-0"
      src={patternPic}
    />
  );
}

export default PatternOne;
