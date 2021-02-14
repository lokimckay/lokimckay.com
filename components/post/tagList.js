import { codeFont } from "../../config";

const TagList = ({ tags, style }) => {
  if (!tags) return null;
  const tagStyle = {
    fontFamily: codeFont,
    ...style,
  };

  return <div style={tagStyle}>{tags.map(tag => `#${tag} `)}</div>;
};

export default TagList;
