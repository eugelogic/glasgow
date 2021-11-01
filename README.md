[NextJS](https://nextjs.org/) & [Sanity](https://www.sanity.io/) blog proof of concept.

[Live demo](https://glasgow.vercel.app/)

## Theme

Since [COP26](https://ukcop26.org/) is on these days (Nov 2021), I thought I would use some dummy content with reference to some of the consequences of global warming.

## Features

- header with editable site title & description
- blog index with featured image, title, category, excerpt, published date and author
- blog post template with the same features as the blog index but rich text instead of the excerpt
- the blog post template also feature a `like` button (server side function)
- minimal style, no css framework
- footer
- mobile friendly (needless to say)
- images from [Unsplash](https://unsplash.com/), see `alt` attributs for credits
- [Baumans](https://fonts.google.com/specimen/Baumans) and [Montserrat](https://fonts.google.com/specimen/Montserrat) Google fonts
- hosted on [Vercel](https://vercel.com/) (for free)

## Behind the Scenes

- integration with [Sanity](https://www.sanity.io/), the unified content platform (free tier)
- singleton with site settings
- custom meta tag description for SEO
- dynamic generated titles for `<title>` tags
- create, edit, unpublish, duplicate or delete posts, authors and categories via the UI
- deploy directly form the UI with the [Sanity Vercel deploy plugin](https://www.sanity.io/plugins/vercel-deploy)

## Screenshots

Here are some screenshots showing the Sanity CMS area

![Sanity CMS area](./docs/galsgow-sanity-cms.jpg)

## Source

This project was mainly inspired by [Learn Next.js and Make React Development Simpler](https://www.freecodecamp.org/news/learn-next-js/)
