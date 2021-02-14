import Skeleton from "../skeleton";

const VimeoTile = ({ id, scale, autoplay, loop, autopause, mute, style }) => {
  const get = value => {
    return value ? "1" : "0";
  };
  const wrapperStyle = {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1,
    ...style,
  };
  const frameStyle = {
    position: "absolute",
    width: scale,
    height: scale,
  };
  const linkStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };
  const goToVideo = () => {
    window.location.href = `https://player.vimeo.com/video/${id}`;
  };

  return (
    <div style={wrapperStyle}>
      <iframe
        title={`Vimeo Video ${id}`}
        src={`https://player.vimeo.com/video/${id}?autoplay=${get(
          autoplay
        )}&loop=${get(loop)}&autopause=${get(autopause)}&muted=${get(mute)}`}
        style={frameStyle}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <div id={`${id}-link`} style={linkStyle} onClick={goToVideo} />
      <Skeleton />
    </div>
  );
};

export default VimeoTile;
