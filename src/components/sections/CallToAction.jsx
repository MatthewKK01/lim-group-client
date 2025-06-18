import Data from "@data/sections/call-to-action.json";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const CallToActionSection = () => {
    const { t } = useTranslation("call-to-action");
  return (
    <section className="cta-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="cta-data">
                    <h2>{t("title")}</h2>
                    <p>{t("description")}</p>
                    <Link href={t("button.link")} className="theme-btn">
                {t("button.label")}
                <i className="fa-solid fa-angles-right" />
              </Link>
                    </div>
                </div>
                <div className="col-lg-5" >
                    <div className="cta-data">
                        <figure>
                        <img src={t("image.url")} alt={t("image.alt")} />
                                                </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CallToActionSection;