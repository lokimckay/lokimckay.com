import { resourcePathToUrl } from "../../../lib/translate";
import Link from "next/link";
import Card from "./card";
import Text from "./text";

const Index = post => {
  const { preview, __resourcePath } = post;
  const route = resourcePathToUrl(__resourcePath);
  return (
    <Link href={`${route}`} passHref={true}>
      <a>{preview === "text" ? <Text {...post} /> : <Card {...post} />}</a>
    </Link>
  );
};

export default Index;
