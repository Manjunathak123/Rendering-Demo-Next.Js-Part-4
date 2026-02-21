/* Dynamic Rendering Example:-
we are using cookies to triggering dynamic rendering on about page.
-> first delete the .next folder and then run npm run build
-> in the terminal /dynamicRendering beside we will be having f, f indicates dynamic rendering 
means server rendered on demand.
-> dynamically rendered pages aren't generated on build time. means in .next folder in app folder
 we won't see html file for /dynamicRendering page.
 -> start application by npm run start.
 -> in browser when we go to /dashboard and click on emptyc cache and hard refresh then the page renders on demand 
 and page renders in the terminal.

 -> Dynamic rendering is a strategy where the HTML is generated at request time.
 -> Next.js automatically enables it when it encounters dynamic functions like cookies, headers, connection, 
 draftMode, after or searchPArams prop.
-> Dynamic rendering is great for personalized content like social media feeds
-> you don't have to stress about choosing between static and dynamic rendering.
-> Next.js automatically selects the optimal rendering startegy for each route based on the 
features and API's you are using.

*/




import { cookies } from "next/headers";

export default async function AboutPage(){
    const cookieStore = await cookies();
    // here name of the cookie is theme
    const theme = cookieStore.get("theme");
    console.log("About server component");
    return <h1>About page {new Date().toLocaleTimeString()}</h1>
}