import Stat from './Stat';
import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function Stats() {
  const ctx = useContext(ThemeContext);
  const themeClasses = ctx.lightTheme
    ? 'bg-github-lightbg'
    : 'bg-github-darkbg';
  const mobileClasses = 'grid grid-cols-3 mb-5 rounded-[10px] p-4';
  return (
    <div
      className={`${themeClasses} ${mobileClasses} tablet:pl-8 tablet:mb-10 desktop:ml-[150px]`}
    >
      <Stat title="Repos" value="8" />
      <Stat title="Followers" value="3938" />
      <Stat title="following" value="9" />
    </div>
  );
}

export default Stats;
