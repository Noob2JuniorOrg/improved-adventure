import { useState } from 'react';

function CustomButton(props) {
  const [customTip, setCustomTip] = useState();

  const changeHandler = (event) => {
    setCustomTip(event.target.value / 100);
    props.onChange(event.target.value / 100, props.index);
  };

  const focusHandler = () => {
    props.onFocus(customTip, props.index);
  };

  return (
    <input
      type="number"
      onChange={changeHandler}
      onFocus={focusHandler}
      className="text-tipcalc-dark bg-tipcalc-inputbg w-tcbuttonmobile inline h-12 mt-1 rounded-md text-2xl tablet:w-tcbuttondesktop tablet:mt-2 focus:border-2 border-tipcalc-accent"
      placeholder="Custom"
    />
  );
}

export default CustomButton;
