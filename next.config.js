const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

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
})(/* your normal nextjs config */);
