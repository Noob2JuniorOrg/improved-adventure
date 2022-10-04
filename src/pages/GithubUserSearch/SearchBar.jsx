import Card from './Card';
import searchImage from './assets/icon-search.svg';
import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function SearchBar() {
  const ctx = useContext(ThemeContext);
  const inputThemeClasses = ctx.lightTheme
    ? 'placeholder-github-lightmain'
    : 'placeholder-white';

  return (
    <Card className="mt-8 pl-4 py-[7px] pr-[7px] flex items-center justify-between tablet:pl-7 tablet:py-[10px] tablet:pr-[10px]">
      <img src={searchImage} className="inline -mr-2 tablet:mr-4" />{' '}
      <input
        className={`${inputThemeClasses} text-[13px] w-[192px] bg-inherit tablet:text-[18px] tablet:w-[73%] desktop:w-[76%]`}
        placeholder="Search GitHub username..."
      />
      <button className="bg-github-accent text-white rounded-[10px] py-3 px-3 text-[14px] font-bold tablet:text-[16px] tablet:px-6 tablet:py-3.5 hover:bg-[#60ABFF]">
        Search
      </button>
    </Card>
  );
}

export default SearchBar;
