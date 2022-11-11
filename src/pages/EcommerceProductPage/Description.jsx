import Price from './Price';
import AddToCart from './AddToCart';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/store';

function Description(props) {
  const dispatch = useDispatch();
  let price;

  if (!props.discount) {
    price = +props.oldPrice;
  } else {
    price = (+props.oldPrice * (100 - props.discount)) / 100;
  }

  const addItemHandler = (quantity) => {
    dispatch(
      cartActions.addItem({
        title: props.title,
        amount: quantity,
        price: price,
        image: props.thumbnail,
      })
    );
  };
  return (
    <div className="p-6 desktop:p-0 desktop:w-[445px] desktop:h-[426px]">
      <h3 className="text-ecom-accent font-bold uppercase text-[12px] tracking-[1.85px] desktop:text-[13px] desktop:tracking-[2px]">
        {props.company}
      </h3>
      <h4 className="text-ecom-dark text-[28px] leading-[32px] font-bold mt-3 desktop:text-[44px] desktop:leading-[48px]">
        {props.title}
      </h4>
      <p className="text-ecom-main text-[15px] leading-[25px] mt-5 desktop:text-[16px] desktop:leading=[26px] desktop:mt-10">
        {props.description}
      </p>
      <Price oldPrice={props.oldPrice} discount={props.discount} />
      <AddToCart onAdd={addItemHandler} />
    </div>
  );
}

export default Description;
