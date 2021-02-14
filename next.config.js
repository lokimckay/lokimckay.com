const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");
const redirects = require("./lib/redirects");

module.exports = withMdxEnhanced({
  /* MDX enhanced config */
  layoutPath: "components/post",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
})({
  /* regular NextJS config */
  redirects: async () => {
    return redirects;
  },
});
