import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Data from '@data/sliders/hero';
import Link from "next/link";

const HeroSlider = () => {
    const [slides, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:1337/api/hero-sliders?populate=*");
                const data = await response.json();
                setUsers(data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="featured-slider-one" style={{ "background": "grey", "minHeight": "100vh" }}>
            <div className="containe">
                <Swiper
                    {...sliderProps.heroSlider}
                    className="swiper-container ro f-slider-one"
                >
                    {slides?.data?.map((item, key) => (
                        <SwiperSlide key={`hs-slide-${key}`} className="swiper-slide">
                            <div className="f-slider-layer">
                                <img src={`http://localhost:1337${item.image[0].url}`} alt={item.title} />
                                <div className="f-slider-one-data">
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                    <Link href={item.documentId} className="theme-btn">
                                        {item.direction_text}
                                        <i className="fa-solid fa-angles-right" />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-nav">
                        <button className="swiper-nav-prev"><i className="fa-solid fa-angles-left" /></button>
                        <button className="swiper-nav-next"><i className="fa-solid fa-angles-right" /></button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};
export default HeroSlider;