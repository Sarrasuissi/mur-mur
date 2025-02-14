"use client";
import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardWithBorder from "../../components/CardWithBorder/CardWithBorder";
import CardWithIcon from "../../components/CardWithIcon/CardWithIcon";
import Slider from "../../components/slider/Slider";
import data from "../../data/devenir-collaborateur.json";
import CardContact from "../../components/CardContact/CardContact";
import { Helmet } from 'react-helmet';


function page() {
  return (
    <div className="mb-20">
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
      <Slider data={data.slider} />
      <div className="py-20 w-defaultwidth m-auto max-w-mwidth1">
        <CardDesc data={data.intro} />
      </div>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.rejoignez}
          colorTitle="text-black"
          marginDesc="md:my-8"
          colorBorder="bg-gray"
          typeTitle="h2"
        />
      </div>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.decouvrez}
          reverse
          colorTitle="text-black"
          marginDesc="md:my-8"
          colorBorder="bg-gray"
          typeTitle="h2"
        />
      </div>
      <div className="pt-20 shadow-lg bg-gray">
        <CardWithIcon data={data.soutien} reverse={true} />
        <div className="py-14">
          <CardWithIcon data={data.reseau} reverse={false} />
        </div>
        <CardWithBorder
          data={data.mission}
          bgColor="bg-white"
          color="bg-gray"
        />
      </div>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardContact data={data.cardContact} />
      </div>
    </div>
  );
}

export default page;
