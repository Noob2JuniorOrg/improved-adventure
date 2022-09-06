import ThemeContext from './store/theme-context';
import { useContext } from 'react';
import ToggleTheme from './ToggleTheme';

function Header() {
  const ctx = useContext(ThemeContext);

  const darkThemeHandler = () => {
    ctx.setDark();
  };

  const lightThemeHandler = () => {
    ctx.setLight();
  };

  const themeClasses = ctx.lightTheme
    ? 'text-github-lightdark'
    : 'text-inherit';
  const mobileClasses = 'text-[26px] font-bold';

  return (
    <div className="flex justify-between items-center">
      <h1 className={`${mobileClasses} ${themeClasses}`}>devfinder</h1>
      <ToggleTheme />
    </div>
  );
}

export default Header;
