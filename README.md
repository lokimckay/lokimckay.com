# lachlanmckay.com

Personal portfolio/blog site

# TODO

- 3d model viewer posts
- Image skeletons
- Social redirects [lokimckay.com/github](lokimckay.com/github)
- Filter blog posts by tag
- Fuzzy search blog posts
- [Add ability to add social media links, tweets etc](https://github.com/saurabhnemade/react-twitter-embed)
- [Upgrade vimeo skeletons using their SDK to detect onLoad](https://developer.vimeo.com/player/sdk/basics)
- Dark mode?

# References

- [How to set sanity documents to have shortid](https://www.youtube.com/watch?v=Tn2lhSYtRrc)
- https://dev.to/whoisryosuke/using-mdx-with-nextjs-and-when-to-go-gatsby-5e4c
- https://mdxjs.com/getting-started/next
- https://github.com/vercel/next.js/tree/canary/examples/blog-starter
- https://github.com/hashicorp/next-mdx-enhanced
- https://github.com/saurabhnemade/react-twitter-embed
- https://prismjs.com/#supported-languages
- https://github.com/hashicorp/next-mdx-enhanced/issues/45

# Docs

## Adding icons through Icomoon

1. Use selection.json generated from http://icomoon.io/app
1. Add your desired icons, select from ready library or add custom svg's
1. Once done click Generate Font
1. Click Download
1. Unzip package and grab your `selection.json`

```jsx
import iconSet from "somewhere/selection.json";
import IcoMoon, { iconList } from "react-icomoon";
```

Then

```jsx
<IcoMoon iconSet={iconSet} color="#444" size={100} icon="shower" />
```
