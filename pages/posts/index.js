import AnimList from "../../components/animList";
import { frontMatter as posts } from "./**/*.mdx";
import { panelBgCol } from "../../config";
import PostPreview from "../../components/post/preview";
import PageEnd from "../../components/pageEnd";

const byDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};

export default () => {
  const containerStyle = {
    background: panelBgCol,
    maxWidth: 800,
    margin: "auto",
  };

  return (
    <div className="hPad" style={containerStyle}>
      <p>A timeline of my digital projects and online presence</p>
      <AnimList
        items={posts.sort(byDate)}
        renderItem={(post, index) => (
          <PostPreview key={`post-${index}`} post={post} />
        )}
      />
      <PageEnd />
    </div>
  );
};
