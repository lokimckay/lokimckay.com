export default ({ showGame, gameSrc, showWidget = true, widgetSrc }) => {
  const style = {
    position: "relative",
    width: 800,
    height: 470,
    border: 0,
    margin: 0,
  };

  const widget = (
    <iframe frameBorder="0" src={widgetSrc} width="800" height="167" />
  );
  const game = (
    <div style={style}>
      <iframe
        src={gameSrc}
        frameBorder="0"
        allowFullScreen
        width="100%"
        height="100%"
      />
    </div>
  );
  return (
    <>
      {showWidget && widgetSrc && widget}
      {showGame && gameSrc && game}
    </>
  );
};
