import { buttonFont } from "../config";
import Icon from "./icon";
import Link from "next/link";

const Button = ({ wrapperStyle, icon, url, label, border }) => {
  const borderStyle = border => {
    return border
      ? {
          borderWidth: 1,
          borderRadius: 2,
          borderCollapse: "collapse",
          borderStyle: "solid",
        }
      : {};
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    textDecoration: "none",
    cursor: "pointer",
    color: "#000",
    fontFamily: buttonFont,
    textAlign: "center",
    userSelect: "none",
    ...borderStyle(border),
  };

  const iconStyle = {
    marginRight: 8,
  };

  return (
    <div style={{ ...wrapperStyle, display: "inline-block" }}>
      <Link href={url}>
        <div style={buttonStyle}>
          {icon && <Icon style={iconStyle} icon={icon} size={14} />}
          {label}
        </div>
      </Link>
    </div>
  );
};

export default Button;
