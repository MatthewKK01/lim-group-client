import Link from "next/link";
import Date from '@library/date';

const PaginationPage = ({ items }) => {
    return (
      <>
        {items.data.map((item, index) => (
        <div className="col-lg-4" key={`post-${index}`}>
            <div className="blog-post">
                <div className="blog-image">
                    <figure>
                    <img src={`http://localhost:1337${item.image[0].url}`} alt={item.title} />
                    </figure>
                    <Link href={`/blog/${item.id}`}>
                        <i className="fa-solid fa-angles-right" />
                    </Link>
                </div>
                <div className="blog-data">
                    <span className="blog-date"><Date dateString={item.createdAt} /></span>
                    <h2>
                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    </h2>
                    <div className="blog-author d-flex-all justify-content-start">
                        
                        <div className="details">
                            <h3><span>by</span> Limgroup</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
      </>
    );
  };
  export default PaginationPage;
  