/* Client component placement Example:- this is second client component pattern the strategic placement of client components in
a component tree.
-> Since server components can't handle state and interactivity, we need client components to fill this gap.
-> the key recomendation here is to position these client components in your lower component tree.
-> see landing-page/page.tsx file and Navbar.tsx, NavLinks.tsx and NavSerach.tsx file
-> landing-page/page.tsx file conatins Navbar and it  containing two inner component links Navlinks for navigation links
 and Navsearch for search bar to search our side.
-> if you declare Navbar as client component then the child components(NavLinks, NavSearch) in the tree  also become client 
componets if you want to declare particular child NavSearch as clinet component then declare "use clinet" for navsearch.
*/