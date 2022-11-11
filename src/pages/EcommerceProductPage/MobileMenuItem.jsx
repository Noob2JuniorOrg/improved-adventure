function MobileMenuItem(props) {
  return (
    <a href={props.link} className="mb-4 block font-bold text-[18px]">
      {props.name}
    </a>
  );
}

export default MobileMenuItem;
