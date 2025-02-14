
import data from "../../../data/Temoignages-de-nos-franchises.json";
import CardPlusWithBorder from "../../../components/CardPlusWithBorder/CardPlusWithBorder";
import CardFormulaire from "../../../components/CardFormulaire/CardFormulaire";
import { Helmet } from 'react-helmet';
function page() {
  return <div>
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
 <h1 className="text-[#FF4C2E] text-[32px] pb-10 font-bold text-center">{data.intro.title}</h1> 
 {data.intro.desc.map((item,index)=>(<div className="" key={index}>
  <p className="pb-5 max-w-mwidth2">{item}</p>
 </div>))}

 </div>
 <CardPlusWithBorder data={data.regions} withoutBorder bgColor="bg-[#c5c4c4]" styleTitle="text-orange" styleDesc="text-white/80" hoverBottom/>
 <div className="py-10">
 <CardFormulaire />
 </div>
  </div>;
}

export default page;
