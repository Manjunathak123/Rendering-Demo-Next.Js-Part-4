import ImageSlider from "../components/ImageSlider"
import { clientSideFunction } from "../utils/client-utils";
import { serverSideFunction } from "../utils/server-utils"

/* Server only code example:- by default is a server component. visit /server-route thyen we will see server component 
and it is running on server we also see server results as part of h1 tag. if you this serverSideFunction function in client
component we will notice a log messgae but this time without server. to prevent to execute server component on client side 
we will use server-only package.
-> install server-only package by using npm i server-only.
and import it on serverSideFunction then build will fail and we will get error like serverSideFunction function will work only
on server. 
-> We are accessing server compoenent


Third party packages:-
for third party packges we use React slick import ImageSlider and invoke it. we will have a server component and still
we will have one client component.

*/
export default function ServerRoutePage(){
    /*example to server-only package
    const results = serverSideFunction();
    return <h1>Server Route {results}</h1>
    */
    const results = serverSideFunction();
   // const clientResult = clientSideFunction();
    return (<>
    <h1>Server Route {results}</h1>
    <ImageSlider/>
    </>)
}