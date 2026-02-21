/* Server only code example:- it is client component 


*/
"use client";


import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";
import { serverSideFunction } from "../utils/server-utils";

export default function ClientRoutePage(){
    /*example to server-only package
    const result = serverSideFunction();
    return <h1>Client route {result} </h1>

    */
    //client only code
    const theme = useTheme();
    const result = clientSideFunction();
    return <> <h1 style={{color: theme.colors.secondary}}>Client Router page</h1>
    <p>{result}</p>
    </>
}