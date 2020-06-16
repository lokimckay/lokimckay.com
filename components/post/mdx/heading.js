import Icon from "../../icon";

const iconStyle = {
  display: "inline-flex",
  marginLeft: 4,
  color: "#CCCCCC",
};

const headingStyle = { marginBottom: 0 };
const headingClass = "mdxHeading";
const headingIconClass = "mdxHeadingIcon";

const Heading = ({ level, text }) => {
  const headings = ({ childElement, anchorElement, icon }) => {
    return {
      h1: (
        <div className={headingClass}>
          {anchorElement}
          <h1 style={headingStyle}>
            {childElement}
            {icon}
          </h1>
        </div>
      ),
      h2: (
        <div className={headingClass}>
          {anchorElement}
          <h2 style={headingStyle}>
            {childElement}
            {icon}
          </h2>
        </div>
      ),
      h3: (
        <div className={headingClass}>
          {anchorElement}
          <h3 style={headingStyle}>
            {childElement}
            {icon}
          </h3>
        </div>
      ),
      h4: (
        <div className={headingClass}>
          {anchorElement}
          <h4 style={headingStyle}>
            {childElement}
            {icon}
          </h4>
        </div>
      ),
      h5: (
        <div className={headingClass}>
          {anchorElement}
          <h5 style={headingStyle}>
            {childElement}
            {icon}
          </h5>
        </div>
      ),
      h6: (
        <div className={headingClass}>
          {anchorElement}
          <h6 style={headingStyle}>
            {childElement}
            {icon}
          </h6>
        </div>
      ),
    };
  };
  const slug = text
    .toLowerCase()
    .replace(/[^0-9a-zA-Z\s]/g, "")
    .replace(/\s/g, "-");
  return (
    headings({
      anchorElement: <a name={slug} id={slug} />,
      childElement: <a href={`#${slug}`}>{text}</a>,
      icon: (
        <Icon
          icon="link"
          size={16}
          style={iconStyle}
          className={headingIconClass}
        />
      ),
    })[level] || null
  );
};

export const h1 = props => <Heading level="h1" text={props.children} />;
export const h2 = props => <Heading level="h2" text={props.children} />;
export const h3 = props => <Heading level="h3" text={props.children} />;
export const h4 = props => <Heading level="h4" text={props.children} />;
export const h5 = props => <Heading level="h5" text={props.children} />;
export const h6 = props => <Heading level="h6" text={props.children} />;
