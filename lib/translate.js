export const resourcePathToUrl = str => {
  let url = str.replace(/\\/g, "/");
  if (url.lastIndexOf(".") != -1) url = url.substring(0, url.lastIndexOf("."));
  return `/${url}`;
};

export const postRouteToDbSlug = str => {
  return str.replace("/posts/", "").replace("/", "-");
};
