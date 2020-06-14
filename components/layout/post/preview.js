import { imageEndpoint, codeFont } from "../../../config";
import { resourcePathToUrl } from "../../../lib/url";
import Link from "next/link";

export default ({ post }) => {
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
    // TODO: dark mode? 2 below
    // color: "white",
    // backgroundColor: "rgba(0,0,0,0.95)",
  };
  const bgStyle = ({ preview, focalX, focalY }) => {
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
      backgroundImage: `url("${imageEndpoint}${preview}?w=200&h=150&fit=crop&crop=focalpoint&fp-x=${focalX}&fp-y=${focalY}")`,
      filter: "blur(2px)",
    };
  };
  const titleStyle = {
    margin: 0,
  };
  const dateStyle = {
    fontFamily: codeFont,
  };
  const tagStyle = {
    fontFamily: codeFont,
  };

  const {
    title,
    date,
    tags,
    preview,
    focalX = 0.5,
    focalY = 0.5,
    __resourcePath,
  } = post;
  const route = resourcePathToUrl(__resourcePath);

  return (
    <Link href={`${route}`}>
      <div style={style}>
        <span style={dateStyle}>{date}</span>
        <h1 style={titleStyle}>{title}</h1>
        <span style={tagStyle}>{tags.map(tag => `#${tag} `)}</span>
        <div style={bgStyle({ preview, focalX, focalY })} />
      </div>
    </Link>
  );
};
