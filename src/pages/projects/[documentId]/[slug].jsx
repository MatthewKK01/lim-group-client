import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import CallToActionSection from "@components/sections/CallToAction";

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

  return (
    <Layouts>
      <PageBanner pageTitle={"Project Detail"} pageDesc={"our values and vaulted us to the top of our industry."} />

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
               
                  <div className="col-lg-6 col-md-6 col-sm-12"  >
                    <div className="project-d-detail">
                      <div className="data">
                        <h3>{postData.title}</h3>
                        <p>{postData.value}</p>
                      </div>
                      <div className="d-flex-all icon">
                        <img src={`http://localhost:1337${postData.image[0].url}`} alt={postData.caption} />
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

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/api/project');
  const data = await res.json();

  const paths = data.data.map((project) => ({
    params: {
      documentId: project.documentId.toString(),
      slug:project.slug
    },
  }));

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/api/project/${params.documentId}?populate=*`)
const project = await res.json()


    return {
      props: {
        data: project,
      }
    }
}