# NextJS Notes

## Routing
- **Routing**: inside `pages` folder each file will represent a route path. f.e. `index.js` = `/` or `news.js` =
  `/news`. Those files may load responsible components.
- **Alternative routing**: create a folder `news` inside `pages` folder and inside `news` add `index.js` file. `pages`
  sub folders works as a segment for url path.
- **Nested routes**: available only in sub folder structure. Inside `news` folder create `news-slug.js` so now
  `news/news-slug` path become available. Sub folder with nested route name will also do the trick. Like `news` ->
  `news-slug` -> `index.js`.
- **Dynamic pages**: when part of the url can be dynamic (slug), like `news/2`. For this use specific syntax - []
  that tells NextJS that it will be dynamic page. You can create a file `[newsSlug].js` or create a sub folder `[newsSlug] -> index.js`. Both will work.
- **useRouter**: give access to navigation, path parameters etc. `query` method allow us to fetch slug value from url.
- **Link** works as in react-router, but accept `href` instead of `to` prop.

## Features
- No need to import `React` from react, NextJS will do it behind the scene. But of course other thing like
  `<Fragment>` must be imported.
-  **_app.js**: special file in `pages` folder. It will act like a root component that NextJS will render. Accept 2 argument: `Component` and `pageProp`. `Component` is a prop that hold actual page that should be rendered and change every time we visit another page. `pageProp` it's a props that loaded page might be getting. When some FBC or settings should be present on all pages we can use `_app.js`.
-  **Data Fetching for Static Pages** has 2 approach: `getStaticProps` (Static Generation) and `getServerSideProps` (Server-side Rendering).
