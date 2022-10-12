# GitHub-Parmasson
This is a “librarian” repository to act as a conveniently catalogued and helpfully organizationally presented archival virtual “Library” (Quenya＝“Parmassë”) of GitHub code repositories that seem idiosyncratically interesting to me or worthy of greater attention… It also makes a nice prototype for deploying an [Astro](https://docs.astro.build/en/getting-started/) site [on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

# Astro Starter Kit: Docs Site
```bash
npm create astro@latest -- --template docs
```
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/docs)

![docs](https://user-images.githubusercontent.com/4677417/186189283-0831b9ab-d6b9-485d-8955-3057e532ab31.png)

## Features
- ✅ **Full Markdown support**
- ✅ **Responsive mobile-friendly design**
- ✅ **Sidebar navigation**
- ✅ **Search (powered by Algolia)**
- ✅ **Multi-language i18n**
- ✅ **Automatic table of contents**
- ✅ **Automatic list of contributors**
- ✅ (and, best of all) **dark mode**

## Commands Cheatsheet
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

For deployment to production, check out the [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

## New to Astro?
Check out the [documentation](https://docs.astro.build) or the [Discord server](https://astro.build/chat).

---
## Customize This Theme
### Site metadata
> `src/config.ts` contains several data objects that describe metadata about your site like title, description, default language, and Open Graph details. You can customize these to match your project.

### CSS styling
> The theme's look and feel is controlled by a few key variables that you can customize yourself. You'll find them in the `src/styles/theme.css` CSS file. For example, the theme uses a "cool blue" accent color by default. To customize this for your project, change the `--theme-accent` variable to whatever color you'd like:
```diff
/* src/styles/theme.css */
:root {
  color-scheme: light;
-  --theme-accent: hsla(var(--color-blue), 1);
+  --theme-accent: hsla(var(--color-red), 1);   /* or: hsla(#FF0000, 1); */
```

## Page metadata
> Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts. If you are using the default layout, you can customize the page in many different ways to optimize SEO and other things. For example, you could use the `title` and `description` properties to set the document title, meta title, meta description, and Open Graph description.

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
layout: ../../layouts/MainLayout.astro
---

# Page content...
```
* For more SEO related properties, look at `src/components/HeadSEO.astro`

### Sidebar navigation
> Sidebar navigation is controlled by the `SIDEBAR` variable in `src/config.ts` file. You can customize the sidebar by modifying this object. For example:
```ts
export const SIDEBAR = {
  en: [
    { text: "Section Header", header: true },
    { text: "Introduction", link: "en/introduction" },
    { text: "Page 2", link: "en/page-2" },
    { text: "Page 3", link: "en/page-3" },

    { text: "Another Section", header: true },
    { text: "Page 4", link: "en/page-4" },
  ],
};
```
* Note the top-level `en` key: This is needed for multi-language support. You can change it to whatever language you'd like, or add new languages as you go. More details on this below.

### Multiple Languages support
> The Astro docs template supports multiple langauges. The default theme only shows `en` documentation, but you can enable multi-language support. To add a new language to your project, you'll want to extend the current `src/pages/[lang]/...` layout:
```diff
 📂 src/pages
 ┣ 📂 en
 ┃ ┣ 📜 page-1.md
 ┃ ┣ 📜 page-2.md
 ┃ ┣ 📜 page-3.astro
+ ┣ 📂 es
+ ┃ ┣ 📜 page-1.md
+ ┃ ┣ 📜 page-2.md
+ ┃ ┣ 📜 page-3.astro
```
* This would require adding the new language name to the `KNOWN_LANGUAGES` map in your `src/config.ts` file. This will enable your new language switcher in the site header.
```diff
// src/config.ts
export const KNOWN_LANGUAGES = {
  English: 'en',
+  Spanish: 'es',
};
```
* Last step: you'll need to add a new entry to your sidebar, to create the table of contents for that language. While duplicating every page might not sound ideal to everyone, this extra control allows you to create entirely custom content for every language.
> Make sure the sidebar `link` value points to the correct language!
```diff
// src/config.ts
export const SIDEBAR = {
  en: [
    { text: 'Section Header', header: true, },
    { text: 'Introduction', link: 'en/introduction' },
    // ...
  ],
+  es: [
+    { text: 'Encabezado de sección', header: true, },
+    { text: 'Introducción', link: 'es/introduction' },
+    // ...
+  ],
};

// ...
```

* If you plan to use Spanish as the the default language, you would simply need to modify the redirect path in `src/pages/index.astro`:
```diff
<script>
- window.location.pathname = `/en/introduction`;
+ window.location.pathname = `/es/introduction`;
</script>
```
* Or you could also remove the above script and write a landing page in Spanish instead.

### What if I don't plan to support multiple languages?
* Not all projects need (or can support) multiple languages. You can continue to use this theme without ever adding a second language.
* If that single language is not English, you can just replace `en` in directory layouts and configurations with the preferred language.

### Search (Powered by Algolia)
* [Algolia](https://www.algolia.com/) offers a free service to qualified open source projects called [DocSearch](https://docsearch.algolia.com/). If you are accepted to the DocSearch program, provide your API Key＆index name in `src/config.ts` and a search box will automatically appear in your site header.
* To remove Algolia’s search and replace it with your own, check out the `src/components/Header.astro` component to see where the component is added.
