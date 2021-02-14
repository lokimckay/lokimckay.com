import { imageEndpoint } from "../../../config";
import { resourcePathToUrl, postRouteToDbSlug } from "../../../lib/translate";
import { getThemeFromTag } from "../../../lib/colourScheme";
import ViewCount from "../viewCount";
import Meta from "../meta";

const Card = ({
  title,
  date,
  tags,
  preview,
  unsplash,
  focalX = 0.5,
  focalY = 0.5,
  __resourcePath,
}) => {
  const theme = getThemeFromTag(tags[0]);

  const style = {
    position: "relative",
    zIndex: 1,
    border: "2px solid #D6D6D6",
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0px 0px 8px 2px #E0E0E0",
    cursor: "pointer",
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 32,
    paddingBottom: 32,
    opacity: 1,
    backgroundColor: theme.backgroundColor,
    color: theme.text,
  };

  const bgStyle = ({ preview, unsplash, focalX, focalY }) => {
    const backgroundImage = preview
      ? `url("${imageEndpoint}${preview}?w=200&h=150&fit=crop&crop=focalpoint&fp-x=${focalX}&fp-y=${focalY}")`
      : `url("https://source.unsplash.com/${unsplash}/200x150")`;
    return {
      position: "absolute",
      opacity: 0.2,
      zIndex: -1,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage,
      filter: "blur(2px)",
    };
  };

  const route = resourcePathToUrl(__resourcePath);
  const slug = postRouteToDbSlug(route);

  return (
    <div style={style}>
      <Meta
        title={title}
        slug={slug}
        date={date}
        tags={tags.slice(0, 1)}
        theme={theme}
      />
      <ViewCount
        id={slug}
        style={{ position: "absolute", right: 48, top: 32 }}
      />
      <div style={bgStyle({ preview, unsplash, focalX, focalY })} />
    </div>
  );
};

export default Card;
