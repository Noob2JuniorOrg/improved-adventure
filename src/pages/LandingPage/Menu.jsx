import Logo from './Logo';
import closeIcon from './images/icon-close.svg';

function Menu(props) {
  return (
    <div className="desktop:hidden z-10 text-white fixed bg-black w-full h-full px-5 pt-10">
      <div className="flex justify-between items-center">
        <Logo />
        <button onClick={props.onClose}>
          <img src={closeIcon} />
        </button>
      </div>
      <div className="mt-40 h-60 uppercase flex flex-col justify-between font-loopbig text-[24px] leading-[25px]">
        <a>About</a>
        <a>Careers</a>
        <a>Events</a>
        <a>Products</a>
        <a>Support</a>
      </div>
    </div>
  );
}

export default Menu;
