import { useSelector, useDispatch } from 'react-redux';
import { calcActions } from './store/store';

import Result from './Result';

function RightContainer() {
  const dispatch = useDispatch();
  const bill = useSelector((state) => state.calc.totalBill);
  const numberOfPeople = useSelector((state) => state.calc.numberOfPeople);
  const tip = useSelector((state) => state.calc.tipFraction);

  let tipAmount;
  let total;

  if (numberOfPeople == 0) {
    tipAmount = 0;
    total = 0;
  } else {
    tipAmount = (bill * tip) / numberOfPeople;
    total = bill / numberOfPeople + tipAmount;
  }

  const resetDisabled = total === 0 && tipAmount === 0;

  const resetHandler = () => {
    dispatch(calcActions.reset());
  };

  return (
    <div className="bg-tipcalc-dark rounded-xl p-5 pt-10 tablet:w-6/12 tablet:p-10 tablet:flex tablet:flex-col tablet:justify-between">
      <div>
        <Result title="Tip Amount" amount={tipAmount} />
        <Result title="Total" amount={total} />
      </div>
      <button
        disabled={resetDisabled}
        onClick={resetHandler}
        className="bg-tipcalc-accent text-tipcalc-dark w-full rounded-md h-14 text-xl uppercase disabled:bg-tipcalc-disabled hover:bg-tipcalc-active"
      >
        Reset
      </button>
    </div>
  );
}
export default RightContainer;
