import { codeFont } from "../../config";

const TagList = ({ tags, style }) => {
  const tagStyle = {
    fontFamily: codeFont,
    ...style,
  };

  return <div style={tagStyle}>{tags.map(tag => `#${tag} `)}</div>;
};

export default TagList;
