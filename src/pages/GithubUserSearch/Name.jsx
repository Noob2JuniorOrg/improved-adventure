import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function Name(props) {
  const ctx = useContext(ThemeContext);
  const themeClasses = ctx.lightTheme
    ? 'text-github-lightdark'
    : 'text-inherit';
  const mobileClasses = 'font-bold text-[16px]';

  return (
    <div className="ml-5 tablet:ml-10 desktop:flex desktop:justify-between desktop:w-full">
      <div>
        <h3 className={`${themeClasses} ${mobileClasses} tablet:text-[26px]`}>
          {props.username}
        </h3>
        <h4 className="text-github-accent text-[13px] tablet:text-[16px]">
          {props.tag}
        </h4>
      </div>
      <p className="text-[13px] tablet:text-[15px] tablet:mt-2">
        Joined {props.date}
      </p>
    </div>
  );
}

export default Name;
