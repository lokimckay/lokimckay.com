export const resourcePathToUrl = str => {
  let url = str.replace(/\\/g, "/");
  if (url.lastIndexOf(".") != -1) url = url.substring(0, url.lastIndexOf("."));
  return `/${url}`;
};
