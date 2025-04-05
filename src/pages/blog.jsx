import { PER_PAGE } from './blog/page/[page]'
import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";


const Blog = ( { posts, totalPosts, currentPage } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Blog"} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Blog Style One Start */}
      <section className="gap blog-style-one our-blog-one">
        <div className="container">
          <div className="row">
            <PaginatedBlog
              items={posts}
            />
          </div>
        </div>

        <div className="container" >
          <div className="row">
            <Pagination
              currentPage={currentPage}
              totalItems={totalPosts}
              perPage={PER_PAGE}
              renderPageLink={(page) => `/blog/page/${page}`}
            />
          </div>
        </div>
      </section>
      {/* Blog Style One End */}
      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {


  const response = await fetch("http://localhost:1337/api/posts?populate=*")
  const posts = await response.json();
  const total = 10

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1
    }
  }
}