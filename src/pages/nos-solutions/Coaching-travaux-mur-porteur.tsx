import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardImageBorder from "../../components/CardImageBorder/CardImageBorder";
import Slider from "../../components/slider/Slider";
import data from "../../data/coaching-travaux-mur-porteur.json";
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
        <div className="pb-10">
          <CardDesc data={data.intro} />
        </div>
      </section>
      <section className="pb-20">
        <div className=" w-defaultwidth m-auto max-w-mwidth1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <CardBigImgDesc
            data={data.services}
            colorTitle="text-black"
            marginDesc=""
            typeTitle="h2"
            reverse
            colorBorder="bg-gray"
          />
        </div>
      </section>
      <section className="py-20">
        <div className=" w-defaultwidth m-auto max-w-mwidth1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <CardBigImgDesc
            data={data.conseils}
            colorTitle="text-black"
            marginDesc=""
            typeTitle="h2"
            colorBorder="bg-gray"
          />
        </div>
      </section>

      <section className="bg-gray   relative">
        <div className="w-defaultwidth m-auto max-w-mwidth1 ">
          <CardImageBorder data={data.assistance} />
        </div>
      </section>

      <section className="mt-20 mb-10">
        <div className="bg-gray   relative">
          <div className="w-defaultwidth m-auto max-w-mwidth1 ">
            <CardImageBorder data={data.gestion} />
          </div>
        </div>
      </section>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardContact data={data.cardContact} />
      </div>
    </div>
  );
}

export default page;
