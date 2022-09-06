function Avatar(props) {
  return (
    <img
      className="w-[70px] h-[70px] rounded-full object-contain bg-white tablet:w-[117px] tablet:h-[117px]"
      src={props.image}
    />
  );
}

export default Avatar;
