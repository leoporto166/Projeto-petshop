
import { useParams } from "react-router-dom"

export function Detalhes(){

    const {id} = useParams();
    
    return(
        <div>
            {id}
        </div>
    )
}