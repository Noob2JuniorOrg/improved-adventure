import leftArrow from './images/icon-previous.svg';
import rightArrow from './images/icon-next.svg';

function Arrow(props) {
  const image = props.next ? (
    <svg
      className="stroke-inherit"
      width="13"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
    </svg>
  ) : (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
    </svg>
  );
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} stroke-ecom-dark hover:stroke-ecom-accent rounded-full px-4 py-3.5 bg-white`}
    >
      {image}
    </button>
  );
}
export default Arrow;
