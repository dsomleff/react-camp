# NextJS Notes

## Routing
- **Routing**: inside `pages` folder each file will represent a route path. f.e. `index.js` = `/` or `news.js` = 
  `/news`. Those files may load responsible components.
- **Alternative routing**: create a folder `news` inside `pages` folder and inside `news` add `index.js` file. `pages` 
  sub folders works as a segment for url path.
- **Nested routes**: available only in sub folder structure. Inside `news` folder create `news-slug.js` so now 
  `news/news-slug` path become available. Sub folder with nested route name will also do the trick. Like `news` -> 
  `news-slug` -> `index.js`.

## Additional info 
- No need to import `React` from react, NextJS will do it behind the scene.
