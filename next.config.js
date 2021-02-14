const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");
const redirects = require("./lib/redirects");

module.exports = withMdxEnhanced({
  /* MDX enhanced config */
  defaultLayout: true,
  fileExtensions: ["mdx"],
  rehypePlugins: [mdxPrism],
})({
  /* regular NextJS config */
  redirects: async () => {
    return redirects;
  },
});
