import { codeFont, headingFont, logoFont } from "../../config";
import TagList from "./tagList";

export default ({
  date,
  title,
  tags,
  subtitle,
  theme = { title: "black", tags: "black", date: "black", subtitle: "black" },
}) => {
  const titleStyle = {
    fontFamily: headingFont,
    color: theme.title,
    margin: 0,
  };
  const dateStyle = {
    color: theme.date,
    fontFamily: codeFont,
  };
  const subtitleStyle = {
    display: "inline-block",
    marginBottom: 8,
    fontSize: 16,
    color: theme.subtitle,
    fontFamily: logoFont,
  };

  return (
    <>
      <span style={dateStyle}>{date}</span>
      <div>
        <a name="top" id="top" />
        <h1 style={titleStyle}>{title}</h1>
      </div>
      {subtitle && <subtitle style={subtitleStyle}>{subtitle}</subtitle>}
      <TagList tags={tags} theme={theme} />
    </>
  );
};
