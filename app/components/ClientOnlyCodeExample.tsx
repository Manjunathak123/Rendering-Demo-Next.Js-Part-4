/* Client-only code Example:- The first client component pattern is seperation of client only code.
-> Just like we need to keep certain operations server-side, its equally crucial to keep some functionality strictly
on the client side.
-> Client only code works with browser specific features- think DOM manipulation, window object interactions
 or local storage operations.
 -> These features are not available on server, so we need to make sure such code runs only on the client side to avoid
 server rendering errors.
-> To Prevent unintended server side usage of client side code, we can use a package called client-only.
-> See example of client-route/page.tsx and server-route/page.tsx and we will define a function that meant to
run on only client side that is client-utils.ts.
-> if you run /client-route in the browser we will see log messages on the browser. and in this there is no special tag and we 
will use client result on the browser. this confirms everything is running on client side. then install client only package
using npm i client-only command. once command conpletes import client-only in client-utils.ts file. then if someone tries to access
this in server-side it will throw error in build time.
*/