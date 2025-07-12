import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Link } from 'react-router-dom';
import card1 from "../../../img/banner-bawwaw-mobile-1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useContext } from 'react';
import { CartContext } from '../../context/context';

interface CardProps{
    id: number
    img: string
}

export interface ProductsProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    subtotal: number;
    order: number;
}

export function Home(){
    const [products, setProducts] = useState<ProductsProps[]>([])

    const {addItemCart} = useContext(CartContext)

    const cards: CardProps[] = [
        {id: 1, img: card1},
        {id: 2, img: card1},
        {id: 3, img: card1}
    ]

    useEffect(() => {

        async function loadApi(){
            const response = await api.get("/products")
        
            setProducts(response.data) 
            console.log(setProducts)
        }

        loadApi();

    }, [])

    function addItem(product: ProductsProps){

        addItemCart(product)

    }

    return(
        <main className="w-full  px-2 h-screen flex flex-col items-center">
            <div className='w-full max-w-7xl'>
                <div className="w-full flex justify-center">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={3}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        className="w-full h-50 sm:h-65 md:h-70 lg:h-80 xl:h-90
                        items-center "
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2 },
                            1440: { slidesPerView: 2},
                        }}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id} className="custom-slide">
                                <div className="w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] flex items-center justify-center">
                                    <img
                                    src={card.img}
                                    className="rounded-lg transition-transform duration-500 ease-in-out"
                                    />
                                </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                    <div className="font-bold text-2xl">
                        <h1>Principais Produtos</h1>
                    </div>
                    <section className='flex flex-wrap items-center justify-center gap-5' >
                {products.map((product) => (

                        <div key={product.id}className='w-[200px] my-3 sm:w-[250px] shadow-sm p-2 '>
                            <Link to={`/detalhes/${product.id}`}>
                                <img src={product.cover} className=''></img>
                                <h1>{product.title}</h1>
                                <strong>Preço: {product.price.toLocaleString("pt-Br", {
                                    style: "currency",
                                    currency: "BRL"
                                })}</strong>
                            </Link>

                            <div className='w-full justify-center flex'>
                                <button className='w-55 bg-amber-300 rounded cursor-pointer font-semibold my-2 h-9 shadow-sm hover:scale-105 transition duration-300' onClick={() => addItem(product)}>
                                    ADICIONAR
                                </button>
                            </div>
                        </div>
                ))}
                </section>

            </div>
        </main>
    )
}