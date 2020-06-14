import IcoMoon from "react-icomoon";
const iconSet = require("../styles/icomoon.json");

// available icons
// envelope-o
// github
// twitter
// file

export default props => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};
