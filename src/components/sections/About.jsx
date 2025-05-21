import { useTranslation } from "next-i18next";
import Data from "../../data/sections/about.json";

const AboutSection = () => {

  const {t} = useTranslation("about-section");

    return (
      <section className="gap no-top about-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" >
              <div className="about-data-left">
                <figure>
                  <img src={Data.image1.url} alt={Data.image1.alt} />
                </figure>
                <figure className="about-image">
                  <img src={Data.image2.url} alt={Data.image2.alt} />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="about-data-right">
                <span>{t('subtitle')}</span>
                <h2>{t("title")}</h2>
                <div className="about-info">
                  <p>
                    {t("text")}
                  </p>
                  <figure>
                    <img className="light-icon" src={Data.signature.light} alt={Data.signature.alt} />
                    <img className="dark-icon" src={Data.signature.dark} alt={Data.signature.alt} />
                  </figure>
                  <h3>{t("name")}</h3>
                  <h4>{t("role")}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutSection;