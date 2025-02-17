import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardDesc from "../../components/CardDesc/CardDesc";
import Slider from "../../components/slider/Slider";
import data from "../../data/creation-douverture-dans-la-charpente-en-france.json";
import CardContact from "../../components/CardContact/CardContact";
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
      <section className="md:pt-24 pt-16 pb-8 w-defaultwidth m-auto max-w-mwidth1">
        <div className="md:pb-10">
          <CardDesc data={data.intro} />
        </div>
      </section>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-4">
        <h2 className="text-orange font-bold pb-10">{data.title}</h2>
        <p>{data.desc}</p>
      </div>
      <section className="md:py-16 py-7 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.installation}
          colorTitle="text-orange"
          colorBorder="bg-orange"
          typeTitle="h2"
          marginImage="my-2"
          // marginImage="my-6"
          // marginImage="lg:my-8 md:my-16"
          // marginDesc="md:my-8"
        />
      </section>
      <section className="md:py-16 py-7 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.creation}
          reverse
          colorTitle="text-orange"
          colorBorder="bg-orange"
          typeTitle="h2"
          marginImage="my-2"
          // marginImage="my-6"
          // marginImage="lg:my-8 md:my-16"
          marginDesc="md:my-20"
        />
      </section>
      <section className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.amenagement}
          colorTitle="text-orange"
          colorBorder="bg-orange"
          typeTitle="h2"
          // marginImage="my-2"
          // marginImage="my-6"
          marginImage="lg:my-8 md:my-16"
          // marginDesc="md:my-8"
        />
      </section>
      <h2 className="text-orange font-bold md:pb-10 md:py-20 w-defaultwidth m-auto max-w-mwidth1">
        {data.title}
      </h2>
      <section className="md:py-16 py-7 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.analyse}
          reverse
          colorTitle="text-orange"
          colorBorder="bg-gray"
          typeTitle="h2"
          marginImage="my-8"
          // marginImage="my-6"
          // marginImage="lg:my-8 md:my-16"
          marginDesc="md:my-20"
        />
      </section>
      <section className="md:py-16 py-7 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.conception}
     
          colorTitle="text-orange"
          colorBorder="bg-gray"
          typeTitle="h2"
          marginImage="my-8"
          // marginImage="my-6"
          // marginImage="lg:my-8 md:my-16"
          marginDesc="md:my-20"
        />
      </section>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-4">
        <h2 className="text-orange font-bold pb-10">{data.title3}</h2>
        <p>{data.desc3}</p>
      </div>
      <section className="md:py-16 py-7 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.finitions}
          reverse
          colorTitle="text-orange"
          colorBorder="bg-orange"
          typeTitle="h2"
          marginImage="my-8"
          // marginImage="my-6"
          // marginImage="lg:my-8 md:my-16"
          marginDesc="md:my-20"
        />
      </section>
      <section className="md:py-16 py-7 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.finalisation}
      
          colorTitle="text-orange"
          colorBorder="bg-orange"
          typeTitle="h2"
          marginImage="my-8"
          // marginImage="my-6"
          // marginImage="lg:my-8 md:my-16"
          marginDesc="md:my-20"
        />
      </section>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardContact data={data.cardContact} />
      </div>
    </div>
  );
}

export default page;
