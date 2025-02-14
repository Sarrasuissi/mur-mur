import data from "../../data/renovation-et-construction-de-murrenforcement-des-murs-porteurs.json";
import Slider from "../../components/slider/Slider";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardImagesShadow from "../../components/CardImagesShadow/CardImagesShadow";
import CardHoverIcon from "../../components/CardHoverIcon/CardHoverIcon";
import CardWithIcon from "../../components/CardWithIcon/CardWithIcon";
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
      <section className="bg-gray py-20">
        <div className="w-defaultwidth m-auto max-w-mwidth1 py-4 ">
          <h2 className="text-orange font-bold pb-10">{data.title}</h2>
          <p>{data.desc}</p>
        </div>
      </section>

      <div className="w-defaultwidth m-auto max-w-mwidth1  py-20">
        <CardImagesShadow data={data.images} grid />
      </div>
      <div className="w-defaultwidth m-auto max-w-mwidth1  py-20">
        <CardImagesShadow data={data.images2} grid />
      </div>
      <h2 className="text-orange font-bold w-defaultwidth m-auto max-w-mwidth1 py-10">
        {data.title2}
      </h2>
      <div className="py-10">
        <CardHoverIcon data={data.service} hover />
      </div>
      <section className="py-20 ">
        <div className=" shadow-lg bg-[#4F5051] pb-16">
          <CardWithIcon
            data={data.besoin}
            reverse={true}
            buttonContact
            withIcon={false}
          />
        </div>
      </section>
    </div>
  );
}

export default page;
