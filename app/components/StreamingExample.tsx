/* Streaming Example:- Streaming is a server rendering strategy that allows for progressive UI rendering from 
the server.
-> work is broken down into smaller chunks and streamed to the client as soon as they are ready. this means users 
can see parts of the page right away, without waiting for everything to load.
-> Its particularly for improving the initial page load times and handling UI elements that depend on slower data fetches,
which would normally hold up entire route. if we recall suspense of our ssr discussion about react rendering. key difference 
is we are looking at next.js where streaming comes built right into app router.
-> see how to setup suspense boundary in our application product-review folder.
-> In product and reviews file we are setting delay time 2 seconds and 4 seconds. if we navigae to /product-reviews 
it will take some time to show anything. to avoid this we can use streaming startegy suspense. means we have to wrap the 
component using suspense then Next.js handles rest. while components are loading after 2 seconds and 4 seconds the fallback
content will display.
*/