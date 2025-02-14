import data from "../../data/Assistance-administrative.json";
import Slider from "../../components/slider/Slider";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardContact from "../../components/CardContact/CardContact";
import CardWithOnlyDesc from "../../components/CardWithOnlyDesc/CardWithOnlyDesc";
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
        </div>{" "}
        <div className="py-16">
          <CardBigImgDesc
            data={data.firstCard}
            marginImage="lg:my-8 md:my-16"
            colorBorder="bg-orange"
            typeTitle="h2"
          />
        </div>
        <div className="pb-16">
          <CardBigImgDesc
            reverse
            data={data.secondCard}
            marginImage="lg:my-8 md:my-16"
            colorBorder="bg-orange"
            typeTitle="h2"
          />
        </div>
        <div className=" py-16">
          <CardWithOnlyDesc data={data.cardChoix} />
        </div>
        <div className="py-10">
          <CardContact data={data.cardContact} />
        </div>
      </section>
    </div>
  );
}

export default page;
