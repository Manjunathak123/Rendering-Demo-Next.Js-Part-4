"use client";

import { useState } from "react"


export const ClientComponentOne = ()=>{
    const [name, setName]= useState("Testname");
    return <h1>Clinet Component one</h1>
}

/* //Server component inside a client component
export const ClientComponentOne = ({children}:{
    children:React.ReactNode
})=>{
    const [name, setName]= useState("Testname");
    return <>
    <h1>Clinet Component one</h1>
    {children}
    </>
}

*/