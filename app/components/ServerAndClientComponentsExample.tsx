/* Server and client Components:- RSC architecture is integrated with Next.js
-> Every component in a Next.js app defaults to being a server component.
-> create about folder inside it page.tsx file, by default this component also server component. to check 
this put console.log statement and see in the browser it will show as server behide console.log statement.
-> Running components on the server brings several advantages they are zero-bundle size, direct access to server 
side resources, improved security and better SEO.
-> but server components can't interact with browser APIs or handle user interactions.
-> In server components we can not declare useState hooks if we want to use then we have to delare "use Client".
-> Server components can't maintain state because they will run on server where browser based state management 
does not exist. by default all components are server components in next.js
-> see about/page.tsx
-> For client component see dashboard/page.tsx file 
-> Server components are rendered exclusively on the server and client components are rendered once on the server
and then on the client.
*/