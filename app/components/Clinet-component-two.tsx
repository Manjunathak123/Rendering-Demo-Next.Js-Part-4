"use client";

import { useState } from "react"


export const ClientComponentTwo = ()=>{
    const [name, setName]= useState("Testname");
    return <h1>Clinet Component Two</h1>
}