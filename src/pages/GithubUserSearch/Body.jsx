import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function Body(props) {
  const ctx = useContext(ThemeContext);
  const themeClasses = ctx.lightTheme
    ? 'bg-github-lightbg text-github-lightmain'
    : 'bg-github-darkbg text-white';
  const mobileClasses = 'font-github px-6 pt-10 pb-20';
  return (
    <div
      className={`${mobileClasses} ${themeClasses}  tablet:p-24 tablet:pb-72 desktop:px-[355px] desktop:pt-32`}
    >
      {props.children}
    </div>
  );
}

export default Body;
