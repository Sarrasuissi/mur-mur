import CardOffresDemploi from "../../components/CardOffresDemploi/CardOffresDemploi";
import data from "../../data/offres-demploi.json";
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
      <CardOffresDemploi data={data.cards} />
    </div>
  );
}

export default page;
