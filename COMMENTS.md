**API (Movie DB):**

- Unfortunately there is no way to request api to search movies names with a genre. We should filter it after requests.
  Source: ( https://www.themoviedb.org/talk/5a3a355e0e0a264cc1206dfc?language=en-US )
  There is 'GET /discover/movie' endpoint, but we can search only by keywords in this case.

- I set genres in config constants, these are universal values, it makes no sense to request api every time for it.
  (we can use some periodic caching mechanism if needed)

**Styling**

- I used Material IU library components + basic styling. I think that was the fastest solution.