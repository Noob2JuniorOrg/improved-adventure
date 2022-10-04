function Price(props) {
  let price;
  if (!props.discount) {
    price = +props.oldPrice;
  } else {
    price = (props.oldPrice * (100 - props.discount)) / 100;
  }
  let oldPrice = +props.oldPrice;
  return (
    <div className="flex justify-between items-center mt-6 desktop:flex-col desktop:items-start">
      <div className="flex items-center">
        <h3 className="inline font-bold text-[28px]">
          {'$' + price.toFixed(2)}
        </h3>
        {props.discount && (
          <div className="px-2 py-0.5 ml-4 font-bold inline text-[16px] text-ecom-accent bg-ecom-bgorange rounded-[6px]">
            {props.discount + '%'}
          </div>
        )}
      </div>
      {props.discount && (
        <div className="font-bold inline text-[16px] text-ecom-light line-through">
          {'$' + oldPrice.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default Price;
