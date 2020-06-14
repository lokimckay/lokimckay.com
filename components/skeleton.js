export default ({ style }) => {
  const skeletonStyle = {
    position: "absolute",
    backgroundColor: "#CCCCCC",
    overflow: "hidden",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    ...style,
  };

  return <div className="loading" style={skeletonStyle} />;
};
