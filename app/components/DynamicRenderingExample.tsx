/* Dynamic Rendering Example:-Dynamic rendering is a server rendering strategy where routes are rendered
 uniquely for each user when they make a request.
 -> It is useful when you need to show personalized data or information that's only available at request
 time(and not ahead of time during prerendering) - things like cookies or URL search parameters.
-> News websites, personalized shopping pages and social media feeds are some examples where dynamic 
rendering is beneficial.

How to dynamically render:- if want to tell to next.js that element is should dynamically render.
-> For this Next.js automatically switches to dynamic rendering for an entire route when it detects what we call a 
"dynamic function" or "Dynamic API".
In next.js these dynamic functions are
1. cookies()
2. headers()
3. connection()
4. draftMode()
5. searchParams prop
6. after()

using any of these automatically opts your entire route into dynamic rendering at request time.
-> dynamicRendering folder page.tsx

*/