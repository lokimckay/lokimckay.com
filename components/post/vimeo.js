import Skeleton from "../skeleton";

export default ({
  id,
  autoplay,
  loop,
  title,
  byline,
  portrait,
  mute,
  style,
}) => {
  const get = value => {
    return value ? "1" : "0";
  };
  const wrapperStyle = {
    position: "relative",
    padding: "56.25% 0 0 0",
    ...style,
  };
  const frameStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div style={wrapperStyle}>
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=${get(
          autoplay
        )}&loop=${get(loop)}&muted=${get(mute)}&title=${get(
          title
        )}&byline=${get(byline)}&portrait=${get(portrait)}`}
        style={frameStyle}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <Skeleton />
    </div>
  );
};
