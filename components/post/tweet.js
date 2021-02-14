import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = ({ id }) => {
  return <TwitterTweetEmbed tweetId={id} />;
};

export default Tweet;
