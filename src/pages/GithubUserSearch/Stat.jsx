import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function Stat(props) {
  const ctx = useContext(ThemeContext);
  const themeClasses = ctx.lightTheme ? 'text-github-lightdark' : '';

  return (
    <div className="text-center tablet:text-left">
      <h4 className="text-[11px] tablet:text-[13px]">{props.title}</h4>
      <p className={`${themeClasses} font-bold tablet:text-[22px]`}>
        {props.value}
      </p>
    </div>
  );
}

export default Stat;
