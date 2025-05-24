import Data from "@data/sections/counters.json";
import CountUp from 'react-countup';
import { useTranslation } from "next-i18next";


const CountersSection = () => {
  const { t } = useTranslation("counter");
  return (
    <section className="gap no-top counter-style-one">
        <div className="container">
          <div className="row">
          
            <div className="col-lg-4 col-md-6 col-sm-12" >
              <div className={ "counter-data" }>
                <div className="count">
                  <span className="counter">
                    <CountUp end={10} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
                  </span>
                  <span>+</span>
                  <i>{t('years')}</i>
                </div>
                <h4>{t('experience')}</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" >
              <div className={ "counter-data" }>
                <div className="count">
                  <span className="counter">
                    <CountUp end={300} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
                  </span>
                <span>+</span>
                  <i>{t('employees')}</i>
                </div>
                <h4>{t('people')}</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" >
              <div className={ "counter-data" }>
                <div className="count">
                  <span className="counter">
                    <CountUp end={21} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
                  </span>
                <span>+</span>
                  <i>{t('locations')}</i>
                </div>
                <h4>{t('sites')}</h4>
              </div>
            </div>
          </div>
        </div>
    </section>
    );
};

export default CountersSection;