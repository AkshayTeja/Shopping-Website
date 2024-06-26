"use client";

import React,{ useEffect, useState } from 'react';
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        // Force a re-render once the component mounts to ensure layout adjusts
        setReRender(true);
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        adaptiveHeight: true,
    };

    const slideData = [
        {
            id: 0,
            img: "/Retro Jerseys.jpg",
            title: "CLASSIC KITS",
            mainTitle: "IN WITH THE OLD!",
            price: "$50.00",
        },
        {
            id: 1,
            img: "/Euro Jerseys.jpg",
            title: "EURO JERSEYS",
            mainTitle: "SUPPORT YOUR NATION THIS SUMMER!",
            price: "$50.00",
        },
        {
            id: 2,
            img: "/PL Jerseys.jpg",
            title: "CLUB JERSEYS",
            mainTitle: "SUPPORT YOUR CLUB!",
            price: "$50.00",
        },
        {
            id: 3,
            img: "/Boots.jpg",
            title: "QUALITY SHOES",
            mainTitle: "GEAR UP!",
            price: "$30.00",
        },
    ];

    return (
        <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide key={item.id}
                                img={item.img}
                                title={item.title}
                                mainTitle={item.mainTitle}
                                price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero;