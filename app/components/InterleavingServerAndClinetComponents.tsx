/* Interleaving Server and client Components:- create Interleaving/page.tsx file and server-component-one.tsx and server-component-two.tsx
and clinet-component-one.tsx and client-component-two.tsx files in components folder.
Interleaving patterns are
1.  Server component inside another Server component:- call server-component-one.tsx inside Interleaving/page.tsx(by default it
 is server component) file inside 
server-component-one.tsx call server-component-two.tsx file then test /Interleaving it is working as expected.
2. clinet component inside another client component:- this is the second pattern. for this call inside Interleaving/page.tsx file
call clinet-component-one.tsx and inside it call client-component-two.tsx and test it using /Interleaving it is working as expected.
3. clinet component inside a server component:- call server component in page.tsx and call client component inside server component
and test it by /Interleaving it is working as expected.
4. Server component inside a client component:- inside  client component we can't call server component.inside  client component 
if we call server component it becomes client component to reslove this issue we 
-> Instead of nesting a server component pass it as a  prop to the client component. the common approach is using react's children 
prop to create a what is called slot. from interleaving page.ts pass server component as a prop to client component.
*/