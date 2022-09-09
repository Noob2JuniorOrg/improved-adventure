import { useState } from 'react';
import Arrow from './Arrow';
function Carousel(props) {
  const [chosenPic, setChosenPic] = useState(0);

  const prevPicHandler = () => {
    if (chosenPic == 0) {
      return;
    }
    setChosenPic((prevState) => prevState - 1);
  };
  const nextPicHandler = () => {
    if (chosenPic == props.images.length - 1) {
      return;
    }
    setChosenPic((prevState) => prevState + 1);
  };

  return (
    <div className="desktop:hidden relative w-full h-[80vw] overflow-hidden">
      <img className="-mt-10" src={props.images[chosenPic]} />
      <Arrow
        onClick={prevPicHandler}
        next={false}
        className="absolute top-[42%] left-[5%]"
      />
      <Arrow
        onClick={nextPicHandler}
        next={true}
        className="absolute top-[42%] right-[5%]"
      />
    </div>
  );
}

export default Carousel;
