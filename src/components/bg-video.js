import bg from "../assets/file.mp4";

const BgVideo = () => {
  return (
    <>
      <div className="layer"></div>
      <video autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
    </>
  );
};

export default BgVideo;
