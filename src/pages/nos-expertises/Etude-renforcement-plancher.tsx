import CardDesc from "../../components/CardDesc/CardDesc";
import CardWithBorder from "../../components/CardWithBorder/CardWithBorder";
import CardWithIcon from "../../components/CardWithIcon/CardWithIcon";
import Slider from "../../components/slider/Slider";
import data from "../../data/etude-renforcement-plancher.json";
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
        <CardDesc data={data.intro} />
      </section>
      <section className="py-10">
        <div className="pt-28 pb-14  shadow-lg bg-gray">
          <CardWithIcon data={data.inspectionCard} reverse={true} />
        </div>
      </section>
      <section>
        <div className="py-16">
          <CardWithBorder
            bgColor="bg-[#F8F6F6]"
            data={data.renforcementPorteur}
            titleColor="text-orange"
            color="bg-white"
            marginCard="lg:m-12"
          />
        </div>
        <div className="py-16">
          <CardWithBorder
            reverse={true}
            bgColor="bg-[#F8F6F6]"
            data={data.renforcementPlanche}
            titleColor="text-orange"
            color="bg-white"
            bgBorder="bg-gray"
            marginCard="lg:m-12"
          />
        </div>
      </section>
      <section className="pt-10  pb-16 ">
        <div
          className="bg-orange h-16"
          style={{ clipPath: "polygon(0 0, 46% 0, 50% 100%, 0 100%)" }}
        ></div>
        <div className="pt-20 pb-14  shadow-lg bg-gray">
          <CardWithIcon
            data={data.collaborationCard}
            reverse={true}
            withIcon={false}
            buttonContact={true}
          />
        </div>
        <div
          className="bg-orange h-16"
          style={{ clipPath: "polygon( 50% 0, 100% 0, 100% 100%,54% 100%)" }}
        ></div>
      </section>
    </div>
  );
}

export default page;
