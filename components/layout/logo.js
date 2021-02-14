import { logoFont, hideLogo } from "../../config";
import Link from "next/link";

const Logo = () => {
  const logoStyle = {
    textDecoration: "none",
    color: "#000",
    fontSize: 32,
    fontFamily: logoFont,
    pointerEvents: "auto",
    cursor: "pointer",
  };

  return (
    <Link href="/">
      <span style={logoStyle}>{hideLogo ? "." : "LOKI"}</span>
    </Link>
  );
};

export default Logo;
