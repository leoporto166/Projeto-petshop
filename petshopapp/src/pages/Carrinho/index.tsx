import img from "../../../img/banner-bawwaw-mobile-1.jpg"

export function Carrinho(){
    return(
        <main className="w-full p-2 h-screen flex flex-col items-center">
            <div className="w-full max-w-7xl rounded shadow py-3 hover:shadow-md transition duration-300">
                <div className="flex w-full relative">

                    <img className=" ml-2 mt-2 w-4/12"
                    src={img} alt="" />

                    <div className="pl-2">
                        <h1>aaaa</h1>
                        <strong>-price</strong>
                    </div>

                    <div className="absolute right-0 pr-2">
                        <h2>N</h2>
                    </div>
                </div>
                <div className="flex justify-between px-2 py-10">
                        <div><strong>-subtotal: R$100</strong></div>

                        <div>
                            <button className="bg-yellow-200 w-[25px]">
                                -
                            </button>
                            
                            <span className="px-3">
                                0
                            </span>

                            <button className="bg-yellow-200 w-[25px]">
                                +
                            </button>
                        </div>

                        <div>
                            "LIX"
                        </div>
                </div>
            </div>
        </main>
    )
}