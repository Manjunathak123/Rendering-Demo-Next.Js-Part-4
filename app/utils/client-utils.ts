// this function wokrs only on client side not on server side

import "client-only";

export const clientSideFunction = ()=>{
    console.log(
       ` use window object,
       use location storage`);
     return "client result"

}