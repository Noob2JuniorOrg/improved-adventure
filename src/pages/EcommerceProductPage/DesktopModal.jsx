import Lightbox from './Lightbox';
import { useState } from 'react';
import Arrow from './Arrow';

function DesktopModal(props) {
  const [chosenPic, setChosenPic] = useState(0);

  const nextPic = () => {
    if (chosenPic === 3) {
      return;
    }
    setChosenPic((prevState) => prevState + 1);
  };

  const prevPic = () => {
    if (chosenPic === 0) {
      return;
    }
    setChosenPic((prevState) => prevState - 1);
  };

  return (
    <Lightbox className="hidden desktop:inline">
      <div className="w-[38%] absolute my-[15%] mx-[31%]">
        <button
          onClick={props.onClose}
          className="absolute fill-white hover:fill-ecom-accent -top-10 right-0"
        >
          <svg
            className="scale-[1.33]"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <img className="w-full rounded-[15px]" src={props.images[chosenPic]} />
        <Arrow
          onClick={prevPic}
          next={false}
          className="absolute top-[38%] -left-6"
        />
        <Arrow
          onClick={nextPic}
          next={true}
          className="absolute top-[38%] -right-6"
        />

        <div className="mt-8 w-[83%] m-auto flex justify-between">
          {props.thumbnails.map((thumbnail, index) => {
            const opacityClasses =
              index === chosenPic ? 'opacity-25' : 'hover:opacity-50';
            const borderClasses =
              index === chosenPic ? 'border-2 border-ecom-accent' : '';
            const setPic = () => {
              setChosenPic(index);
            };
            return (
              <button
                onClick={setPic}
                key={index}
                className={`${borderClasses} bg-white rounded-[10px] w-[20%] overflow-hidden`}
              >
                <img className={opacityClasses} src={thumbnail} />
              </button>
            );
          })}
        </div>
      </div>
    </Lightbox>
  );
}

export default DesktopModal;
