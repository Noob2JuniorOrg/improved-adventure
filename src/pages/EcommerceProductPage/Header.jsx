import menuIcon from './images/icon-menu.svg';
import logoPic from './images/logo.svg';
//import cartIcon from './images/icon-cart.svg';
import profilePic from './images/image-avatar.png';
import Avatar from './Avatar';
import Cart from './Cart';
import { useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

function Header(props) {
  const cartAmount = useSelector((state) => state.cart.totalAmount);

  const [showCart, setShowCart] = useState(false);
  const fillClasses = showCart ? 'fill-ecom-dark' : 'fill-ecom-main';
  const toggleCartHandler = () => {
    setShowCart((prevstate) => !prevstate);
  };
  return (
    <>
      <div className="flex justify-between items-center p-6 bg-white desktop:px-0 desktop:mb-20 desktop:border-b border-[#E4E9E2] desktop:pb-0">
        <div>
          <button className="desktop:hidden" onClick={props.onOpenMenu}>
            <img className="inline" src={menuIcon} />
          </button>
          <img className="inline ml-3 desktop:ml-0" src={logoPic} />
          <Navbar />
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleCartHandler}
            className={`${fillClasses} hover:fill-ecom-dark mr-6 relative`}
          >
            <svg
              className="fill-inherit"
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
            {cartAmount !== 0 && (
              <div className="bg-ecom-accent text-white text-[10px] rounded-[6.5px] px-2 absolute -top-2 left-2">
                {cartAmount}
              </div>
            )}
          </button>
          <Avatar image={profilePic} />
        </div>
      </div>
      {showCart && <Cart />}
    </>
  );
}

export default Header;
