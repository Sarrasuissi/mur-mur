import data from "../../data/etude-et-renforcement.json";
import Slider from "../../components/slider/Slider";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardWithOnlyDesc from "../../components/CardWithOnlyDesc/CardWithOnlyDesc";
import CardContact from "../../components/CardContact/CardContact";
import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import { Helmet } from 'react-helmet';
function page() {
  return (
    <div>
       <Helmet>
        <title>{data.metaData.title}</title>
        <meta name="description" content={data.metaData.description} />
        <link rel="canonical" href="https://mur-mur.fr/" />
        <meta property="og:title" content={data.metaData.title} />
        <meta property="og:description" content={data.metaData.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mur-mur.fr/" />
      </Helmet>
      <Slider btn video data={data.slider} />
      <section className="md:pt-24 pt-16 pb-16 w-defaultwidth m-auto max-w-mwidth1">
        <div className="py-5">
          <CardDesc data={data.intro} />
        </div>
        <div className="lg:pt-8  pb-14">
          {data.listOfCards.map((item, index) => (
            <div key={index} className="py-16">
              {index === 0 ? (
                <h2 className="text-orange text-[28px] pb-16  font-bold ">
                  Inspection et Analyse Technique Initiale
                </h2>
              ) : null}
              {index === 2 ? (
                <h2 className="text-orange text-[28px] pb-16 font-bold ">
                  Techniques de Renforcement et Mise en Œuvre
                </h2>
              ) : null}
              {index === 5 ? (
                <h2 className="text-orange text-[28px] pb-16 font-bold ">
                  Documentation et Certification : Conformité et Sécurité
                </h2>
              ) : null}
              <CardBigImgDesc
                data={item}
                colorBorder={index % 2 === 0 ? "bg-orange" : "bg-gray"}
                marginImage="my-6"
                reverse={index % 2 === 0 ? false : true}
                typeTitle="h2"
              />
            </div>
          ))}
        </div>
        <div className="pb-5">
          <h2 className="text-orange text-[28px] font-bold pb-7">
            Assistance dans les Démarches Administratives
          </h2>
          <p>
            Nous vous aidons dans les démarches administratives pour valider les
            interventions auprès des autorités locales.
          </p>
        </div>
        <div className=" py-16">
          <CardWithOnlyDesc data={data.cardChoix} />
        </div>
        <div className="lg:py-10">
          <CardContact data={data.cardContact} />
          <div className="pt-12">
            <p className="font-bold text-[18px] text-center">
              Mur-Mur, votre partenaire de confiance pour des projets de
              construction réussis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
