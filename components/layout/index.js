import { hideBg } from "../../config";
import Header from "./header";
import Background from "./bg";

export default ({ children }) => {
  const wrapperStyle = {
    minWidth: 300,
    paddingLeft: 16,
    paddingRight: 16,
  };
  return (
    <div style={wrapperStyle}>
      <Header />
      {children}
      {!hideBg && <Background />}
    </div>
  );
};
