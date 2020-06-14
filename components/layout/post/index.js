import { codeFont, panelBgCol } from "../../../config";
import PageEnd from "../../../components/pageEnd";

export default frontMatter => {
  return ({ children }) => {
    const { title, subtitle, paddingBottom = 64 } = frontMatter;

    const style = {
      backgroundColor: panelBgCol,
      maxWidth: 800,
      margin: "auto",
      paddingBottom: paddingBottom,
    };
    const wrapperStyle = {
      position: "relative",
      ...style,
    };
    const bgStyle = {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(255,255,255,0.9)",
      zIndex: -1,
      ...style,
    };

    return (
      <div className="hPad" style={wrapperStyle}>
        <h1 style={{ marginBottom: 8 }}>{title}</h1>
        {subtitle && (
          <subtitle style={{ fontFamily: codeFont }}>{subtitle}</subtitle>
        )}
        <hr style={{ marginRight: 64, marginBottom: 32 }} />
        {children}
        <div style={bgStyle} />
        <PageEnd />
      </div>
    );
  };
};
