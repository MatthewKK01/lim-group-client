import Data from "@data/sections/latest-posts.json";
import Date from '@library/date';
import { useTranslation } from "next-i18next";
import Link from "next/link";

const LatestPostsSection = ( { posts } ) => {
        const {t} = useTranslation("latest-posts")

    const apiUrl =`http://localhost:1337`
    return (
        <section className="gap no-top blog-style-one">
            <div className="heading">
                <figure>
                    <img src="/img/heading-icon.png" alt="heading-icon" />
                </figure>
                <span>{t("subtitle")}</span>
                <h2>{t("title")}</h2>
            </div>
            <div className="container">
                <div className="row">
                    {posts.slice(0, Data.numOfItems).map((item, key) => (
                    <div key={`latest-post-item-${key}`} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-post">
                            <div className="blog-image">
                                <figure>
                                 <img src={`${apiUrl}${item.image[0].url}`} alt={item.title} />
                                </figure>
                                <Link href={`/blog/${item.documentId}/${item.title.toLowerCase().split(' ').join('-')}`}>
                                    <i className="fa-solid fa-angles-right" />
                                </Link>
                            </div>
                            <div className="blog-data">
                                <span className="blog-date">
                                    <Date dateString={item.createdAt} />
                                </span>
                                <h2>
                                    <Link href={`/blog/${item.documentId}/${item.title.toLowerCase().split(' ').join('-')}`}>{item.title}</Link>
                                </h2>
                                <div className="blog-author d-flex-all justify-content-start">
                                    {/* <div className="author-img">
                                        <figure>
                                            <img src={item.author.avatar} alt={item.author.name} />
                                        </figure>
                                    </div> */}
                                    <div className="details">
                                        <h3> <span>by</span> Limgroup</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="common-btn">
                    <Link href={Data.button.link} className="theme-btn">{t("label")} <i className="fa-solid fa-angles-right" /></Link>
                </div>
            </div>
        </section>
    );
};

export default LatestPostsSection;