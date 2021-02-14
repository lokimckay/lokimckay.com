import { frontMatter as posts } from "./**/*.mdx";
import PostList from "../../components/postList";

const Index = () => <PostList posts={posts} />;

export default Index;
