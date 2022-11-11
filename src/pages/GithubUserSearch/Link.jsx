import { useContext } from 'react';
import ThemeContext from './store/theme-context';

function Link(props) {
  const ctx = useContext(ThemeContext);
  let value = props.value;
  let linkClasses =
    'mb-4 text-[13px] flex items-center tablet:text-[15px] hover:underline';
  if (value.length === 0) {
    linkClasses += ' opacity-50 hover:no-underline';
    value = 'Not Available';
  }
  linkClasses += ctx.lightTheme ? ' fill-github-lightmain' : ' fill-white';

  return (
    <div className={linkClasses}>
      {props.icon}
      <p className="ml-3">{value}</p>
    </div>
  );
}

export default Link;
