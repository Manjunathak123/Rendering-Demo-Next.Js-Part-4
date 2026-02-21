/* Third Party Packages Example:- this is second server component pattern.
-> Server components have introducfed an exciting new paradigm, and the ecosystem is evloving to keep up.
-> Third party packages are starting to add the "use client" directive to components that need client side feature
making it clear where they should run.
-> Many npm packages have not made this transition yet.
-> This means while they work fine in client components, they might break or fail completly in server components.
-> there is a solution for this, we can wrap the third party components that need client side features in our own 
client components.
Example:- we will use react slick a popular carousel component form nnpm that relies on client side features so this
install necessary packages.  run below command
npm install react-slick slick-carousel @types/react-slick
*/