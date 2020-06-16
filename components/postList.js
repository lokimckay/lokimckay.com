import { panelBgCol, showEvents } from "../config";
import PostPreview from "./post/preview";
import AnimList from "./animList";
import PageEnd from "./pageEnd";
import events from "../lib/events";
import Event from "./event";

const byDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};

export default ({ posts }) => {
  const containerStyle = {
    background: panelBgCol,
    maxWidth: 800,
    margin: "auto",
  };

  const items = posts
    .map(post => {
      return { ...post, type: "post" };
    })
    .concat(
      showEvents
        ? events
            .filter(event => !event.hide)
            .map(event => {
              return { ...event, type: "event" };
            })
        : []
    )
    .sort(byDate);

  return (
    <div className="hPad" style={containerStyle}>
      <p>A timeline of my digital projects and online presence</p>
      <AnimList
        items={items}
        renderItem={(item, index) => {
          return item.type === "post" ? (
            <PostPreview key={`post-${index}`} post={item} />
          ) : (
            <Event event={item} />
          );
        }}
      />
      <PageEnd />
    </div>
  );
};
