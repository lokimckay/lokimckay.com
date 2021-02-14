import IcoMoon from "react-icomoon";
const iconSet = require("../styles/icomoon.json");

const Icon = props => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

// available icons
// envelope-o
// github
// twitter
// file

export default Icon;
