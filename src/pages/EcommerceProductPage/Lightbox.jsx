function Lightbox(props) {
  return (
    <div
      className={`${props.className} z-20 fixed absolute top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.75)]`}
    >
      {props.children}
    </div>
  );
}

export default Lightbox;
