function SocialIcon(props) {
  return (
    <button className="hover:border-b-2 h-10">
      <img src={props.image} />
    </button>
  );
}

export default SocialIcon;
