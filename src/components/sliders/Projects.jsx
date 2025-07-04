import Data from "@data/sliders/projects.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';


const ProjectsSlider = () => {
    const [Projects, setProjects] = useState([])
    const { locale } = useRouter(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://91.99.179.84:1337/api/project?populate=*&locale=${locale}`);
                const data = await response.json();
                setProjects(data.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchData();
    }, [locale]);

    const { t } = useTranslation('projects');


    return (
        <section className="gap project-style-one light-bg-color">
          
            <div className="heading">
                <figure>
                    <img src="/img/heading-icon.png" alt="Heading Icon" />
                </figure>
                <span>{t("subtitle")}</span>
                <h2>{t("title")}</h2>
            </div>
            <div className="container">
                <Swiper
                    {...sliderProps.projectsSlider}
                    className="swiper-container project-slider"
                >
                    {Projects.slice(0, Data.numOfItems).map((item, key) => (
                        <SwiperSlide key={`pjs-slide-${key}`} className="swiper-slide">
                            <div className="project-post">
                                <figure>
                                    <img src={`http://91.99.179.84:1337${item.image[0].url}`} alt={item.title} />
                                </figure>
                                <div className="project-data">
                                    <h3><Link href={`/projects/${item.documentId}/${item.slug}`}>{item.title}</Link></h3>
                                    <p>{item.short}</p>
                                    <Link className="project-icon" href={`projects/${item.documentId}/${item.slug}`}>
                                        <i className="fa-solid fa-angles-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination" />
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectsSlider;
