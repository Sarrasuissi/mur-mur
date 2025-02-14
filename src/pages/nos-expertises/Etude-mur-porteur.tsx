import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardContact from "../../components/CardContact/CardContact";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardWithBorder from "../../components/CardWithBorder/CardWithBorder";
import CardWithIcon from "../../components/CardWithIcon/CardWithIcon";
import Slider from "../../components/slider/Slider";
import data from "../../data/etude-mur-porteur.json";
import { Helmet } from 'react-helmet';
function Page() {
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
      <section className="md:pt-24 pt-16 pb-10 w-defaultwidth m-auto max-w-mwidth1">
        <div className="pb-7">
          <CardDesc data={data.intro} />
        </div>
        <div className="py-16">
          <CardBigImgDesc
            data={data.test}
            marginDesc="md:my-8"
            colorBorder="bg-gray"
            typeTitle="h2"
          />
        </div>
        <div className="py-16">
          <CardBigImgDesc
            reverse
            data={data.secondCard}
            marginDesc="md:my-8"
            colorBorder="bg-gray"
            typeTitle="h2"
          />
        </div>
      </section>
      <section>
        <div className="pt-20 pb-10  shadow-lg bg-gray">
          <CardWithIcon data={data.soutien} reverse={true} />
        </div>
      </section>

      <div className="py-16">
        <CardWithBorder
          bgColor="bg-[#F8F6F6]"
          data={data.mission}
          color="bg-white"
          titleColor="text-orange"
        />
      </div>
      <section className="w-defaultwidth m-auto max-w-mwidth1 pb-20">
        <div>
          <CardContact data={data.cardContact} />
        </div>
      </section>
    </div>
  );
}

export default Page;
