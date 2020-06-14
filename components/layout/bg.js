export default () => {
  const style = {
    position: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("/bg.png")`,
    opacity: 0.5,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -10,
  };

  return <div style={style} />;
};
