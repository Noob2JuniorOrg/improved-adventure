import logoPic from './images/logo.svg';

function Logo(props) {
  return (
    <img
      src={logoPic}
      className={`${props.className} w-[144px] desktop:w-[192px]`}
    />
  );
}

export default Logo;
