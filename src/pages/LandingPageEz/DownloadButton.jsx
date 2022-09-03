function DownloadButton(props) {
  return (
    <button
      className={`${props.className} text-normal font-bold w-full h-[61px] rounded-xl flex justify-center items-center`}
    >
      <img className="w-[17px] h-[20px] mr-2" src={props.icon} />
      {props.title} Download
    </button>
  );
}

export default DownloadButton;
