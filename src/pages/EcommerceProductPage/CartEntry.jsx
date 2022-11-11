import trashIcon from './images/icon-delete.svg';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/store';

function CartEntry(props) {
  const dispatch = useDispatch();
  const price = +props.price;
  const singularPrice = '$' + price.toFixed(2);
  const totalPrice = '$' + (props.price * props.quantity).toFixed(2);

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.title));
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <img
        className="inline rounded-[4px] w-[50px] h-[50px]"
        src={props.image}
      />
      <div className="inline text-ecom-main">
        <h4>{props.title}</h4>
        <p>
          {singularPrice} x {props.quantity}
          <span className="font-bold text-ecom-dark">{totalPrice} </span>{' '}
        </p>
      </div>
      <button onClick={removeItemHandler}>
        <img src={trashIcon} />
      </button>
    </div>
  );
}

export default CartEntry;
