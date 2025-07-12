
import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { type ProductsProps } from "../Home";
import { useNavigate } from "react-router-dom";

export function Detalhes(){

    const {id} = useParams();
    const [item, setItem] = useState<ProductsProps>()
    const navigate = useNavigate()

    useEffect(() => {

        async function loadItem() {

            try{
                const response = api.get(`/products/${id}`)

                setItem((await response).data)
            }
            catch{
                navigate("*")
            }
            
            
        }

        loadItem()

    }, [id])
    
    return(
        <main className="w-full flex justify-center items-center" >
                <div className="w-full max-w-7xl h-screen p-2 flex flex-col items-center sm:flex-row sm:items-start sm:justify-center py-5 justify-center">

                    <img className="w-9/12 h-4/12 lg:h-6/12 " src={item?.cover}>
                    </img>
                    <div className=" h-75 lg:h-110 w-full flex flex-col justify-center">
                        <h1 className="pt-4 font-semibold text-lg">{item?.title}</h1>
                        <h1 className="py-2">{item?.description}</h1>
                        <button className='w-full bg-amber-300 rounded cursor-pointer font-semibold my-2 h-9 shadow-sm hover:scale-101 transition duration-300'>
                            COMPRAR
                        </button>
                    </div>
                </div>
             
        </main>
    )
}