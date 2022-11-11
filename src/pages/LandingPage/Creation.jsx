import earthPic from './images/mobile/image-deep-earth.jpg';

function Creation(props) {
  return (
    <div className="text-white hover:text-black relative desktop:basis-[23%] desktop:mb-[2%]">
      <img className="-z-10 w-full hover:opacity-50" src={props.image} />
      <h3 className="absolute font-loopbig uppercase text-[24px] leading-[24px] desktop:text-[32px] desktop:leading-[32px] bottom-5 left-5  desktop:bottom-8 desktop:left-8 w-32 desktop:w-44">
        {props.title}
      </h3>
    </div>
  );
}

export default Creation;
