import Button from './Button';
import CustomButton from './CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { calcActions } from './store/store';

function SelectTip() {
  const selectedButton = useSelector((state) => state.calc.index);
  const isDefault = useSelector((state) => state.calc.isDefault);

  let activeArray = [false, false, false, false, false, false];
  activeArray[selectedButton] = true;

  const dispatch = useDispatch();

  const selectButtonHandler = (tip, index) => {
    if (!tip) {
      dispatch(calcActions.setTip(0));
    } else {
      dispatch(calcActions.setTip(tip));
    }
    dispatch(calcActions.setIndex(index));
  };

  return (
    <div className="mb-7">
      <label className="text-tipcalc-inputtitle block mb-2">Select Tip %</label>
      <div className="flex flex-wrap justify-between">
        <Button
          key="0"
          index="0"
          number="0.05"
          active={activeArray[0]}
          onClick={selectButtonHandler}
        />
        <Button
          key="1"
          index="1"
          number="0.1"
          active={activeArray[1]}
          onClick={selectButtonHandler}
        />
        <Button
          key="2"
          index="2"
          number="0.15"
          isDefault={isDefault}
          active={activeArray[2]}
          onClick={selectButtonHandler}
        />
        <Button
          key="3"
          index="3"
          number="0.25"
          active={activeArray[3]}
          onClick={selectButtonHandler}
        />
        <Button
          key="4"
          index="4"
          number="0.5"
          active={activeArray[4]}
          onClick={selectButtonHandler}
        />
        <CustomButton
          index="5"
          active={activeArray[5]}
          onChange={selectButtonHandler}
          onFocus={selectButtonHandler}
        />
      </div>
    </div>
  );
}

export default SelectTip;
