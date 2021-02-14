const Youtube = ({ id, width, height, autoplay, loop, mute, style }) => {
  const get = value => {
    return value ? "1" : "0";
  };
  const defaultStyle = {
    position: "relative",
    width: width || "100%",
    height: height || 600,
    margin: "auto",
  };
  const frameStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  const loopString = loop ? `&loop=${get(loop)}&playlist=${id}` : "";

  return (
    <div style={style || defaultStyle}>
      <iframe
        type="text/html"
        style={frameStyle}
        src={`https://www.youtube.com/embed/${id}?autoplay=${get(
          autoplay
        )}${loopString}&mute=${get(mute)}&color=white&modestbranding=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Youtube;
