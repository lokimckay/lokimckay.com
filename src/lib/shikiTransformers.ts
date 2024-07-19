import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerMetaHighlight,
} from "@shikijs/transformers";

export default [
  // https://shiki.style/packages/transformers
  transformerNotationDiff(),
  transformerNotationHighlight(),
  transformerNotationWordHighlight(),
  transformerNotationFocus(),
  transformerMetaHighlight(),
];
