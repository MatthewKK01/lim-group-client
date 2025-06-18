import { PER_PAGE } from './blog/page/[page]'
import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


const Blog = ( { posts, totalPosts, currentPage } ) => {

  const {t} = useTranslation("blog-page")

  return (
    <Layouts>
      <PageBanner pageTitle={t('pageTitle')} pageDesc={t("pageDesc")} />

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


export async function getStaticProps({locale}) {


  const response = await fetch(`http://localhost:1337/api/posts?populate=*&locale=${locale}`)
  const posts = await response.json();
  const total = 10

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,
      ...(await serverSideTranslations(locale, ["blog-page"])), // Add your namespaces here

    }
  }
}