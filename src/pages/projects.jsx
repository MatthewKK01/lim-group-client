import Layouts from "@layouts/Layouts";
import Link from "next/link";
import Image from "next/image"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageBanner from "@components/PageBanner";
import { useTranslation } from "next-i18next";

const Portfolio = (props) => {

  const {t} = useTranslation("projects-banner")
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;


  return (
    <Layouts>
      <PageBanner pageTitle={t("pageTitle")} pageDesc={t("pageDesc")} />

      {/* Our Project One Start */}
      <section className="gap no-top project-completed our-projects-one">
        {props.projects.data.map((item, key) => (
        <div key={`projects-item-${key}`} className="prj-post">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3><Link href={`/projects/${item.documentId}/${item.slug}`}>{item.title}</Link></h3>
                  <p>{item.short}</p>
                  <div className="loc-date">
                    <div>
                      <span>LOCATION:</span>
                      <span>{item.location}</span>
                    </div>
                    <div>
                      <span>DATE:</span>
                      <span>{item.dates}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img  src={`${apiUrl}${item.image[0].url}`} alt={item.title} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </section>
      {/* Our Project One End */}
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps({locale}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const url = `${apiUrl}/api/project?populate=*&locale=${locale}`
  

  const res = await fetch(url)

  const allProjects = await res.json()

  return {
    props: {
      projects: allProjects,
              ...(await serverSideTranslations(locale, ['projects-banner'])), // Add your namespaces here
      
    }
  }
}