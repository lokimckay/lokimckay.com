export default ({ url, alt = "post image", resize, style, link = true }) => {
  const sizes = {
    post: "?w=800&fit=max",
    halfPost: "?w=400&fit=max",
    preview: "?w=400&h=150&fit=crop&crop=center",
  };
  const sizeString = sizes[resize] || "";
  const imgStyle = {
    maxWidth: "100%",
    borderRadius: 4,
    padding: 0,
    boxShadow: "0px 0px 8px 2px #EAEAEA",
    ...style,
  };

  const raw = `https://cdn.sanity.io/images/gbwh96hl/production/${url}`;
  const src = `${raw}${sizeString}`;
  const img = <img alt={alt} src={src} style={imgStyle} />;

  return link ? <a href={raw}>{img}</a> : img;
};
