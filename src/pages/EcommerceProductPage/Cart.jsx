import classes from './Cart.module.css';
import CartEntry from './CartEntry';
import thumbnailPic from './images/image-product-1-thumbnail.jpg';
import { useSelector } from 'react-redux';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  let cartContent;
  if (items.length === 0) {
    cartContent = (
      <p className="w-full my-20 font-bold text-ecom-main text-center">
        Your cart is empty.
      </p>
    );
  } else {
    cartContent = (
      <div className="px-5 pt-6 pb-8">
        {items.map((item, index) => (
          <CartEntry
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.amount}
          />
        ))}
        <button className="mt-1 bg-ecom-accent py-4 w-full text-white font-bold rounded-[10px]">
          Checkout
        </button>
      </div>
    );
  }

  return (
    <div
      className={`${classes.shadow} rounded-[10px] z-10 absolute bg-white top-[80px] w-[96%] mx-[2%] desktop:w-[360px] desktop:top-38 desktop:right-12`}
    >
      <h3 className="p-5 font-bold">Cart</h3>
      <hr className="border-[#E4E9F2]" />
      {cartContent}
    </div>
  );
}

export default Cart;
