import { useSelector } from 'react-redux';
import { useState } from 'react';

function Input(props) {
  const [error, setError] = useState(false);
  //using state instead of deriving the value of error from redux setState
  //so that there is initially no error even though number of people value
  //is initially zero

  const InputChangeHandler = (event) => {
    props.onChange(event.target.value);
    if (props.errorMessage) {
      if (!event.target.value || event.target.value == 0) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const classShow = error ? 'inline' : 'hidden';
  const classBorder = error
    ? 'border-2 border-tipcalc-red'
    : 'focus:border-2 focus:border-tipcalc-accent';

  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <label className="text-tipcalc-inputtitle block text-base">
          {props.title}
        </label>
        <p className={`${classShow} text-tipcalc-red`}>{props.errorMessage}</p>
      </div>
      <input
        value={props.value}
        onChange={InputChangeHandler}
        className={`${props.imageClass} ${classBorder} text-tipcalc-dark bg-tipcalc-inputbg rounded-md w-full h-12 text-right mt-2 pr-4 text-4xl`}
        type="number"
      />
    </div>
  );
}

export default Input;
