export default ({ children }) => {
  const style = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%",
    textAlign: "center",
    maxWidth: 800,
    minWidth: 380,
  };

  return <div style={style}>{children}</div>;
};
