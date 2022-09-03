function Result(props) {
  const amount = props.amount.toFixed(2) + '$';

  return (
    <div className="mb-10 flex justify-between">
      <div>
        <h2 className="text-white">{props.title}</h2>
        <p className="text-tipcalc-slash text-xs">/ person</p>
      </div>
      <p className="text-tipcalc-accent text-5xl">{amount}</p>
    </div>
  );
}

export default Result;
