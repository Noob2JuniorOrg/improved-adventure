import minusIcon from './images/icon-minus.svg';
import plusIcon from './images/icon-plus.svg';
import cartIcon from './images/icon-cart.svg';
import classes from './AddToCart.module.css';
import { useState } from 'react';

function AddToCart(props) {
  const [quantity, setQuantity] = useState(0);

  const minusHandler = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  };

  const plusHandler = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const addToCartHandler = () => {
    props.onAdd(quantity);
    setQuantity(0);
  };

  return (
    <div className="desktop:flex desktop:justify-between desktop:items-center desktop:mt-10">
      <div className="mt-5 desktop:mt-0 bg-ecom-bggray flex justify-between px-5 py-4 rounded-[10px] desktop:w-[157px] desktop:h-[56px]">
        <button className="hover:opacity-50" onClick={minusHandler}>
          <img src={minusIcon} />
        </button>
        <p className="font-bold text-[16px]">{quantity}</p>
        <button className="hover:opacity-50" onClick={plusHandler}>
          <img src={plusIcon} />
        </button>
      </div>
      <button
        disabled={quantity === 0}
        onClick={addToCartHandler}
        className={`disabled:opacity-50 disabled:hover:bg-ecom-accent ${classes.shadow} hover:bg-[#FFAB6A] mt-4 desktop:mt-0 rounded-[10px] py-4 w-full bg-ecom-accent text-white font-bold flex items-center justify-center desktop:w-[272px] desktop:h-[56px]`}
      >
        <svg
          className="mr-3 fill-white scale-[0.79]"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fillRule="nonzero"
          />
        </svg>
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
