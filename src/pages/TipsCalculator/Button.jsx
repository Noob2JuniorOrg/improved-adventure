function Button(props) {
  let classes;
  if (props.isDefault) {
    classes = 'bg-tipcalc-accent text-tipcalc-dark';
  } else if (props.active) {
    classes = 'bg-tipcalc-active text-tipcalc-dark';
  } else {
    classes = 'bg-tipcalc-dark text-white';
  }

  const label = props.number * 100 + '%';

  const clickHandler = () => {
    props.onClick(props.number, props.index);
  };

  return (
    <button
      onClick={clickHandler}
      className={`${classes} w-tcbuttonmobile my-1 font-bold text-2xl rounded-md h-12 tablet:w-tcbuttondesktop tablet:my-2 hover:bg-tipcalc-active hover:text-tipcalc-dark`}
    >
      {label}
    </button>
  );
}

export default Button;
