# My Personal Site (https://anson.wang)

Hey! You found the Github repo for my personal site. It uses Nextjs and is hosted on Netlify, based off the [Nextjs blog starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

## Adding Blog Posts

To add a new blog post to this website:

1. **Create the `_posts` folder** (if it doesn't already exist) in the root of your project.

2. **Add a new Markdown file** (`.md`) to the `_posts` folder. The filename will be used as the post's slug (e.g., `my-post.md` will be accessible at `/posts/my-post`).

3. **Include the following frontmatter metadata** at the top of your Markdown file:

```yaml
---
title: "Your Post Title"
excerpt: "A short summary of your post."
coverImage: "/assets/blog/your-post/cover.jpg"
date: "YYYY-MM-DDTHH:MM:SS.sssZ" # Use ISO format
author:
  name: Your Name
  picture: "/assets/blog/authors/your-picture.jpg"
ogImage:
  url: "/assets/blog/your-post/cover.jpg"
---
```

4. **Write your post content** below the frontmatter.

**Example:**

```markdown
---
title: "Dynamic Routing and Static Generation"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Your post content goes here...
```

5. **Commit your changes** and redeploy the site. Your new post will appear automatically.