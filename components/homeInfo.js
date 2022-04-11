import { codeFont } from "../config";
import Nav from "./layout/nav";

const HomeInfo = () => {
  const headingStyle = {
    margin: 0,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  };

  const subtitleStyle = {
    margin: 0,
    fontSize: 20,
    fontWeight: "normal",
  };

  const taglineStyle = {
    fontSize: 18,
  };

  const pointsStyle = {
    textAlign: "left",
    fontFamily: codeFont,
    padding: 0,
    marginBottom: 16,
  };

  const pointStyle = {
    margin: 0,
  };

  return (
    <>
      <h1 style={headingStyle}>Lachlan McKay</h1>
      <h2 style={subtitleStyle}>Software Engineer</h2>
      <p style={taglineStyle}>I love creating visceral digital experiences</p>
      <ul style={pointsStyle}>
        <li style={pointStyle}>6 years industry experience</li>
        <li style={pointStyle}>
          Financial services, academic and creative industries
        </li>
        <li style={pointStyle}>
          Strong passion for visual & creative digital media
        </li>
      </ul>
      <Nav borders={false} />
    </>
  );
};

export default HomeInfo;
