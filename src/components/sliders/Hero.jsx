import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeroSlider = () => {
    const [slides, setUsers] = useState([]);

    const router = useRouter();
    const locale = router.locale;
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/hero-sliders?populate=*&locale=${locale}`);
                const data = await response.json();
                setUsers(data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, [locale]);

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
                                <picture>
                                    {/* Mobile version - will load for viewports 600px and below */}
                                    <source
                                        media="(max-width: 600px)"
                                        srcSet={`http://localhost:1337${item.mobile_img[0].url}`}
                                    />

                                    {/* Desktop version - fallback */}
                                    <img
                                        src={`http://localhost:1337${item.image[0].url}`}
                                        alt={item.title}
                                    />
                                </picture>

                                <div className="f-slider-one-data">
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                {item.direction_text &&     <Link href={item.documentId} className="theme-btn">
                                        {item.direction_text}
                                        <i className="fa-solid fa-angles-right" />
                                    </Link>}
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