

import card1 from "../../../img/banner-bawwaw-mobile-1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface CardProps{
    id: number
    img: string
}

export function Home(){

    const cards: CardProps[] = [
        {id: 1, img: card1},
        {id: 2, img: cad1},
        {id: 3, img: card1}
    ]
    return(
        
        <div>
            Home
        </div>

    )
}
