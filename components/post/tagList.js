import { codeFont } from "../../config";

export default ({ tags, style }) => {
  const tagStyle = {
    fontFamily: codeFont,
    ...style,
  };

  return <div style={tagStyle}>{tags.map(tag => `#${tag} `)}</div>;
};
