import { Table, THead, TBody, TRow, TData } from "./table";
import { h1, h2, h3, h4, h5, h6 } from "./heading";
import { blockquote } from "./quote";

const MDXComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  table: Table,
  th: THead,
  tbody: TBody,
  tr: TRow,
  td: TData,
  blockquote: blockquote,
};

export default MDXComponents;
