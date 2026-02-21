import fs from "fs";
import { ServerComponentTwo } from "./Server-component-two";

export const ServerComponentOne = ()=>{
    fs.readFileSync("app/components/Server-component-one.tsx","utf-8");
    return <>
    <h1> Server component One</h1>
    <ServerComponentTwo />
    </>
}