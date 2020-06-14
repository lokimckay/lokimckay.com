import Button from "../button";
import { navLinks } from "../../config";

export default ({ borders = true }) => {
  const navItemStyle = ({ first, last }) => {
    return {
      paddingLeft: first ? 0 : 4,
      paddingRight: last ? 0 : 4,
    };
  };

  return (
    <nav>
      {navLinks.map((link, index) => {
        const first = index === 0;
        const last = index + 1 === navLinks.length;
        const { url, name, icon } = link;
        return (
          <Button
            key={`nav-${index}`}
            url={url}
            label={name}
            icon={icon}
            border={borders}
            wrapperStyle={navItemStyle({ first, last })}
          />
        );
      })}
    </nav>
  );
};
