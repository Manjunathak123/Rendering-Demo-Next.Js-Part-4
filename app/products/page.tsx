/* Generate Static Params:- create ProductsPage and Id dynamic page then build application 
using npm run build then if you see in the terminal ProductsPage page static rendering and static list page is
dynamic rendering. becuase next.js does not know what is value of [id] so it renders dynamically. if you see in the 
build folder(that is .next/server/app) ypu will find the html file for /products folder but we won't see anythong for
product/[id] page.
-> run the server and if we hit http://localhost:3000/products/1 and when we refresh every time time stamp will change.
because product details page is renders on demand at request time.
-> Form our previous learning we know that static rendering gives us better performance. you can tell next.js to prerender 
atleast out feature product detail pages. for this we will use gererateStaticParams.
-> in product details page(that is products/[id]/page.tsx page) create generateStaticParams function that returns
dynamic segments. this function runs during build time. if we run the build we will see SSG for /[id] then run the server
then navigate to ttp://localhost:3000/products/1 then time stamps stays the same when we refresh.

 Routes with multiple dynamic segments:-
 -> suppose we have a product catalog with categories and products using /products/[category]/[product]/page.tsx 
 -> generateStaticParams is a powerful feature in Next.js that lets you prerender static routes for dynamic segments
 it runs at build time and in multiple dynamic segements it really boosts your performance by ensuring frequently access 
 pages are pre render and ready to server instanlty.
*/
import Link from "next/link";

export default function ProductsPage(){

    return (
        <>
        <h1>Featured Product</h1>
        <Link href="products/1">Product 1</Link>
        <Link href="products/2">Product 2</Link>
        <Link href="products/3">Product 3</Link>
        </>
    )
}