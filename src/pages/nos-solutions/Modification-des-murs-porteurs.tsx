import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardHoverIcon from "../../components/CardHoverIcon/CardHoverIcon";
import CardImagesShadow from "../../components/CardImagesShadow/CardImagesShadow";
import Slider from "../../components/slider/Slider";
import data from "../../data/modification-des-murs-porteurs.json";
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
      <section className="py-16">
        <div className=" w-defaultwidth m-auto max-w-mwidth1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <CardBigImgDesc
            data={data.solutions}
            colorTitle="text-orange"
            marginDesc=""
            typeTitle="h2"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className=" w-defaultwidth m-auto max-w-mwidth1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <CardBigImgDesc
            data={data.services}
            colorTitle="text-orange"
            marginDesc=""
            typeTitle="h2"
            reverse
          />
        </div>
      </section>
      <h2 className="text-orange font-bold w-defaultwidth m-auto max-w-mwidth1 py-10">
        {data.title}
      </h2>
      <section className=" bg-gray">
        <div className="w-defaultwidth m-auto max-w-mwidth1  translate-y-20">
          <CardImagesShadow data={data.images} />
        </div>
      </section>
      <section className=" w-defaultwidth m-auto max-w-mwidth1 pt-36 ">
        <CardImagesShadow data={data.images2} />
      </section>
      <h2 className="text-orange font-bold w-defaultwidth m-auto max-w-mwidth1 pt-24 pb-10">
        {data.title}
      </h2>
      <div className="py-10">
        <CardHoverIcon data={data.service} hover grid />
      </div>
      <section className=" py-20">
        <div className="bg-gray">
          <div className="bg-gray w-defaultwidth m-auto max-w-mwidth1 text-white">
            <h2 className="pb-4 pt-8 font-bold">{data.titleContact}</h2>
            <p>{data.desc1}</p>
            <p className="py-5">{data.desc2}</p>
            <div className="   pb-16 m-auto px-3 ">
              <button className="border-2 border-orange duration-150  hover:bg-lightGray group-hover:border-transparent  relative w-[170px] hover:w-[200px] rounded-sm p-3 ">
                <p className="text-[#FF4C2E] text-[20px]  font-meduim ">
                  Contacter-nous
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
