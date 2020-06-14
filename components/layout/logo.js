import { logoFont, hideLogo } from "../../config";
import Link from "next/link";

export default () => {
  const logoStyle = {
    textDecoration: "none",
    color: "#000",
    fontSize: 32,
    fontFamily: logoFont,
    cursor: "pointer",
  };

  return (
    <Link href="/">
      <span style={logoStyle}>{hideLogo ? "." : "LOKI"}</span>
    </Link>
  );
};
