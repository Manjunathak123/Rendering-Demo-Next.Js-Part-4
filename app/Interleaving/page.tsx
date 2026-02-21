import { ClientComponentOne } from "../components/Clinet-component-one";
import { ServerComponentOne } from "../components/Server-component-one";


export default function InterLeavingPage(){
    return (
        <>
        <h1>Interleaving Page</h1>
        <ServerComponentOne />
        </>
    ) 
/*// Server component inside a client component
        return (
            <>
            <h1>Interleaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
            </>
        )

        */
}