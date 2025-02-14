import data from "../../data/Devenir-franchise.json";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardFormulaire from "../../components/CardFormulaire/CardFormulaire";
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
      <div className="py-20 w-defaultwidth m-auto max-w-mwidth1">
        <CardDesc data={data.intro} />
        <div className="">
          {data.list.map((item, index) => (
            <div className="py-3" key={index}>
              <h2 className="text-center font-semibold text-[28px] py-5">
                {item.titre}
              </h2>
              <p className="leading-[35px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <CardFormulaire />
    </div>
  );
}

export default page;
