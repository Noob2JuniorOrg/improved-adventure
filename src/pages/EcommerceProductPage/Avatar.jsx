function Avatar(props) {
  return (
    <button className="hover:border-2 border-ecom-accent bg-red-400 rounded-full w-[24px] h-[24px] desktop:w-[50px] desktop:h-[50px]">
      <img src={props.image} />
    </button>
  );
}

export default Avatar;
