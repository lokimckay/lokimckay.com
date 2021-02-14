const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");
const redirects = require("./lib/redirects");

module.exports = withMdxEnhanced({
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
  redirects: async () => {
    return redirects;
  },
});
