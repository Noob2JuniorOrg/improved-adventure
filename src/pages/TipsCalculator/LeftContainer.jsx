import Input from './Input';
import SelectTip from './SelectTip';
import { useDispatch, useSelector } from 'react-redux';
import { calcActions } from './store/store';

function LeftContainer() {
  const dispatch = useDispatch();
  const billValue = useSelector((state) => state.calc.totalBill);
  const peopleValue = useSelector((state) => state.calc.numberOfPeople);

  const handleBillChange = (bill) => {
    dispatch(calcActions.setBill(bill));
  };

  const handlePeopleChange = (people) => {
    dispatch(calcActions.setNumberOfPeople(people));
  };

  return (
    <div className="tablet:pt-4 tablet:pl-4 tablet:pr-12 tablet:w-1/2 ">
      <Input
        title="Bill"
        imageClass="dollarBg"
        onChange={handleBillChange}
        value={billValue}
      />
      <SelectTip />
      <Input
        title="Number of People"
        imageClass="personBg"
        onChange={handlePeopleChange}
        value={peopleValue}
        errorMessage="Can't be zero"
      />
    </div>
  );
}

export default LeftContainer;
