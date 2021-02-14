import { useRouter } from "next/router";
import { panelBgCol } from "../config";
import { postRouteToDbSlug } from "../lib/translate";
import ViewCount from "../components/post/viewCount";
import PageEnd from "../components/pageEnd";
import Meta from "../components/post/meta";
import Head from "next/head";

const Index = ({ frontMatter, children }) => {
  const router = useRouter();
  const slug = postRouteToDbSlug(router.pathname);
  const {
    title,
    date,
    tags,
    subtitle,
    paddingBottom = 64,
    unlisted,
  } = frontMatter;

  const style = {
    backgroundColor: panelBgCol,
    maxWidth: 800,
    margin: "auto",
    paddingBottom: paddingBottom,
  };

  const wrapperStyle = {
    position: "relative",
    ...style,
  };

  const bgStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: -1,
    ...style,
  };

  return (
    <>
      {unlisted && (
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
      )}
      <div className="hPad" style={wrapperStyle}>
        <Meta
          title={title}
          date={date}
          tags={tags}
          subtitle={subtitle}
          viewCount={
            <ViewCount id={slug} increment={true} style={{ marginLeft: 8 }} />
          }
        />
        <hr style={{ marginRight: 64, marginBottom: 32 }} />
        {children}
        <div style={bgStyle} />
        <PageEnd />
      </div>
    </>
  );
};

export default Index;
