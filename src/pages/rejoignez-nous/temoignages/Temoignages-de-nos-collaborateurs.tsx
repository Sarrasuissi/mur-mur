import React from "react";
import data from "../../../data/Temoignages-de-nos-collaborateurs.json";
import CardPlusWithBorder from "../../../components/CardPlusWithBorder/CardPlusWithBorder";
import CardDesc from "../../../components/CardDesc/CardDesc";
import Formulaire from "../../../components/Formulaire/Formulaire";
import { franchisesKey } from "../../../constants/FormspreeKeys";
import { Helmet } from 'react-helmet';

function page() {

  return (
    <div className="py-10">
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
      <div className="pb-10 w-defaultwidth m-auto max-w-mwidth1">
        <CardDesc data={data.intro} />
      </div>
      <CardPlusWithBorder data={data.Partenariat} />
      <Formulaire keyForm={franchisesKey} />
    </div>
  );
}

export default page;
