import Data from "@data/sections/services-2.json";
import Link from "next/link";
import { useTranslation } from "next-i18next";


const ServicesSection = () => {
    const {t} = useTranslation("services")
    const Data = t('items', { returnObjects: true });
console.log(Data)
    
  return (
    <section className="gap service-style-one">
        <div className="container">
        <div className="row">
            {Data.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12 text-center" >
            <div className="service-data">
                <div className="svg-icon d-flex-all">
                    <img className="light-icon" src={item.icon} alt={item.icon.alt} />
                    <img className="dark-icon" src={item.icon} alt={item.icon.alt} />
                </div>
                <h3><Link href={item.link}>{item.title}</Link></h3>
                <p>{item.text}</p>
                <Link href={item.link} className="icon">
                    <i className="fa-solid fa-angles-right" />
                </Link>
            </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default ServicesSection;