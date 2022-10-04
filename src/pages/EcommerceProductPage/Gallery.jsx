import { useState } from 'react';

function Gallery(props) {
  const [chosenPic, setChosenPic] = useState(0);

  return (
    <div className="hidden desktop:block w-[445px]">
      <img
        onClick={props.onOpenModal}
        className="rounded-[15px] w-full"
        src={props.images[chosenPic]}
      />
      <div className="mt-7 flex justify-between">
        {props.thumbnails.map((thumbnail, index) => {
          const opacityClasses =
            index === chosenPic ? 'opacity-25' : 'hover:opacity-50';
          const borderClasses = index === chosenPic ? 'border-2' : '';
          const changePicHandler = () => {
            setChosenPic(index);
          };
          return (
            <button
              onClick={changePicHandler}
              key={index}
              className={`${borderClasses} border-ecom-accent overflow-hidden rounded-[10px]`}
            >
              <img
                className={`${opacityClasses} w-[88px] h-[88px]`}
                src={thumbnail}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
