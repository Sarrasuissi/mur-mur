import data from "../../data/execution-et-gestion-des-travaux.json";
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
      <section className="md:pt-24 pt-16 pb-16 w-defaultwidth m-auto max-w-mwidth1 ">
        <div className="py-5">
          <CardDesc data={data.intro} />
        </div>
        <div className="lg:pt-8  pb-14">
          {data.listOfCards.map((item, index) => (
            <div key={index} className="py-16">
              {item?.cardTitle?.title && 
                <div>
                <h2 className="text-orange text-[28px] pb-16  font-bold ">
                  {item?.cardTitle?.title}
                </h2>
            </div>}
          <CardBigImgDesc
            data={item.cardOne}
            colorBorder={index % 2 === 0 ? "bg-orange" : "bg-gray"}
            marginImage={index % 2 === 0 ? "my-12" : "my-6"}
            reverse={index % 2 === 0 ? false : true}
            typeTitle="h2" />
        </div>
        ))}
      </div><div className="md:py-16 pb-8">
        <CardWithOnlyDesc data={data.cardChoix} />
      </div><div className="lg:py-10">
        <CardContact data={data.cardContact} />
      </div>
      </section>
    </div>
  );
}

export default page;
