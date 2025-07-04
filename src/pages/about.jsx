import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => {

  const { t } = useTranslation("about")
  const points = t('points', { returnObjects: true });
  const steps = t('steps', { returnObjects: true })
  const benefits = t('benefits', { returnObjects: true })

  return (
    <Layouts>
      <PageBanner pageTitle={t("pageTitle")} pageDesc={t("pageDesc")} />

      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>{t('aboutTitle')}</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>{t('whoWeAreTitle')}</h3>
                  <p>{t('whoWeAreText')}</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-1.jpeg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>{t('whatsInItForMeTitle')}</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> {points.concreteSolution}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {points.workersSkills}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {points.standards}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {points.inclusiveIndustry}</li>
                    <li><i className="fa-solid fa-circle-dot" /> {points.trust}</li>

                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-3.jpeg" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>{t('subtitle')}</span>
          <h2>{t('title')}</h2>
        </div>
        <div className="container">
          <figure style={{ "position": "relative", "zIndex": "9" }}>
            <img className="w-100" src="/img/gallery-2.jpeg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="plans">
                  <div className="y-box d-flex-all">
                    {step.number}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/service2.jpeg" alt="About key Benefits" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>{t("keyBenefits")}</h2>
                <ul>
                  {benefits.map((benefit, index) => {
                    return (
                       <li key={index}>
      <i className="fa-solid fa-check" />
  <div className="flex flex-col">
        <span style={{ color: '#006839', fontWeight: 'bold' }}>{benefit.highlight}</span>
      <p style={{ margin: 0 }}>{benefit.description}</p>
  </div>
    </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}


    </Layouts>
  );
};
export default About;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['counter', 'about'])), // Add your namespaces here
    }
  }
}