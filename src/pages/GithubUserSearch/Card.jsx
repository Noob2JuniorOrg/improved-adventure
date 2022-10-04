import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function Card(props) {
  const ctx = useContext(ThemeContext);
  const themeClasses = ctx.lightTheme
    ? 'bg-white drop-shadow-[0_16px_30px_rgba(70,96,187,0.2)]'
    : 'bg-github-darkcard';
  const mobileClasses = 'rounded-[15px]';
  return (
    <div className={`${mobileClasses} ${themeClasses} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
