import AnimList from "../components/animList";
import { contactPoints } from "../config";
import Icon from "../components/icon";
import SplashBox from "../components/splashBox";

export default () => {
  const containerStyle = {
    display: "inline-block",
  };
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  };
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  };
  const iconStyle = {
    color: "black",
    marginRight: 16,
  };
  return (
    <SplashBox>
      <div style={containerStyle}>
        <div style={listStyle}>
          <AnimList
            items={contactPoints}
            renderItem={(item, index) => {
              const { text, url, icon } = item;
              return (
                <a key={index} href={url} style={itemStyle} target="_blank">
                  <Icon icon={icon} size={32} style={iconStyle} />
                  {text}
                </a>
              );
            }}
          />
        </div>
      </div>
    </SplashBox>
  );
};
