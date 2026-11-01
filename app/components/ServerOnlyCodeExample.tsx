/* Server only code:-
This is the first server component pattern. This is the seperation of server only code.
-> When building Next.js application some code is specifically designed to run exclusively on the server.
-> Think about modlues or functions that work with multiple libraries, hanlde environmant variables, Communicate directly
with databases or process sensitive inofrmation.
-> Since Javascript modules can be shared between server and client components, code meant for the server could accidentally
  find its way to the client.
  -> This is bad news as it can bloat your Javascript bundles, expose your secret keys, database queries and sensitive 
  business logic.
-> It is super important to keep server-only code seperate from client-side code, for this we will use server-only package.
-> It throws a build time error if someone accidentally imports server code into a client component.
-> create two components server-route/page.tsx and client-route/page.tsx and use utils/server-utils.ts file in server component.
*/