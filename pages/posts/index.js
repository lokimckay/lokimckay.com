import { frontMatter as posts } from "./**/*.mdx";
import PostList from "../../components/postList";

export default () => <PostList posts={posts} />;
