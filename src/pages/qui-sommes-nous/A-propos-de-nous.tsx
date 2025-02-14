import parse from "html-react-parser";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardHoverIcon from "../../components/CardHoverIcon/CardHoverIcon";
import Slider from "../../components/slider/Slider";
import data from "../../data/A-propos-de-nous.json";
import CardContact from "../../components/CardContact/CardContact";
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
      <Slider data={data.slider} />
      <div className="py-10 w-defaultwidth m-auto max-w-mwidth1">
        <CardDesc data={data.intro} styleTitle="max-w-[1350px]" />
        <div className="py-10">
          <h2 className="text-orange pb-7 font-semibold">
            {data.histoire.title}
          </h2>
          {data.histoire.desc.map((item, index) => (
            <p key={index} className="py-2 lleading-[35px] ">
              {parse(item)}
            </p>
          ))}
        </div>
      </div>
      <div className="py-10">
        <CardHoverIcon data={data.service} hover  />
      </div>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardContact data={data.cardContact} />
      </div>
    </div>
  );
}

export default Page;
