import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
// import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import CallToActionSection from "@components/sections/CallToAction";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


const ProjectDetail = ( props ) => {
  const postData = props.data.data;
  let prev_id, next_id, prev_key, next_key = 0;

  // props.projects.forEach(function(item, key){
  //   if ( item.id == postData.id ) {
  //     prev_key = key - 1;
  //     next_key = key + 1;
  //   }
  // })

  // props.projects.forEach(function(item, key){
  //   if ( key == prev_key ) {
  //     prev_id = item.id;
  //   }
  //   if ( key == next_key ) {
  //     next_id = item.id;
  //   }
  // })


      const { t } = useTranslation("blog-page");
  


  return (
    <Layouts>
      <PageBanner pageTitle={t("pageTitle")} pageDesc={t("pageDesc")} />

      <section className="gap detail-page">

        <div className="container">
          <ul className="next-prev-projects">
            {prev_id != 0 && prev_id != undefined &&
            <li className="prev">
              <Link href={`/projects/${prev_id}`}>
                <i className='fa-solid fa-arrow-left-long' />
              </Link>
            </li>
            }
            {next_id != 0 && next_id != undefined &&
            <li className="next">
              <Link href={`/projects/${next_id}`}>
                <i className='fa-solid fa-arrow-right-long' />
              </Link>
            </li>
            }
          </ul>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pr-dat">
                <div className="heading-style-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="data">
                          <span>Project Overview</span>
                          <h2>{postData.title}</h2>
                        </div>
                      </div>        
                    </div>
                  </div>
                </div>

                {postData.contentHtml != "" &&
                <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                }
                
                {typeof postData.checklist != "undefined" &&
                <>
                  <h3>{postData.title}</h3>
                  <ul className="include">
                    {postData.checklist.items.map((item, key) => (
                    <li key={`checklist-item-${key}`}><i className="fa-solid fa-check" /> {item}</li>
                    ))}
                  </ul>
                </>
                }



                {typeof postData != "undefined" &&
                <div className="row space">
               <div className="blog-image">
                  <figure>
                  <img src={`http://91.99.179.84:1337${postData.image[0].url}`} alt={postData.title} />
                  </figure>
                </div>
                <div className="blog-data">
                  {/* <span className="blog-date"><Date dateString={postData.date} /></span> */}

                  <div className="blog-author d-flex flex-column justify-content-start">
                  <article className="proose">
                  <BlocksRenderer content={postData.content} />
                  </article>
                    <div className="details d-flex justify-content-end">
                      <h3> <span>by</span> LimGroup</h3>
                    </div>
                  </div>
                </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {typeof postData.slider != "undefined" &&
        <>
          {/* Project Detail Slider Start */}
          {/* <div className="gap no-top project-detail-slider">
            <div className="container-fluid g-0">
              <Swiper
                {...sliderProps.projDetailsSlider}
                className="p-d-slider"
              >
                {postData.slider.items.map((item, key) => (
                <SwiperSlide key={`pds-slide-${key}`} className="swiper-slide">
                <figure>
                  <img src={item.image} alt={item.alt} />
                </figure>
                </SwiperSlide>
                ))}
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div> */}
          {/* Project Detail Slider Start */}
        </>
      }

      {/* <RelatedProjectsSection projects={props.related} /> */}

      <CallToActionSection />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths({locales}) {
  const res = await fetch('http://91.99.179.84:1337/api/project');
  const data = await res.json();

  const paths = data.data.flatMap((project) =>
    locales.map((locale) => ({
      params: {
        documentId: project.documentId.toString(),
        slug: project.slug,
      },
      locale,
    }))
  );

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params,locale }) {
  const res = await fetch(`http://91.99.179.84:1337/api/project/${params.documentId}?populate=*&locale=${locale}`);

const project = await res.json()


    return {
      props: {
        ...(await serverSideTranslations(locale, ["call-to-action",'blog-page'])), // ✅ Add translation here
        data: project,
        locale
      }
    }
}