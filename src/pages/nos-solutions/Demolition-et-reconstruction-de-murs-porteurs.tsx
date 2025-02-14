import data from "../../data/demolition-et-reconstruction-de-murs-porteurs.json";
import Slider from "../../components/slider/Slider";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardHoverIcon from "../../components/CardHoverIcon/CardHoverIcon";
import CardImageBorder from "../../components/CardImageBorder/CardImageBorder";
import CardFleche from "../../components/CardFleche/CardFleche";
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
        <div className="py-8">
          <CardDesc data={data.intro} />
        </div>
      </section>
      <div className="py-10">
        <CardHoverIcon data={data.service} hover number />
      </div>
      <div className="my-20">
        <section className="bg-gray   relative">
          <div className="w-defaultwidth m-auto max-w-mwidth1 ">
            <CardImageBorder data={data.reconstruction} />
          </div>
        </section>
      </div>
      <div className="py-10">
        <CardHoverIcon data={data.icons} hover number />
      </div>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-20 ">
        <h2 className="text-orange font-bold pb-10">{data.title}</h2>
        <CardFleche data={data.cardFleche} />
      </div>
      <section className=" py-20">
        <div className="bg-gray">
          <div className="bg-gray w-defaultwidth m-auto max-w-mwidth1 text-white">
            <h2 className="pb-4 pt-8 font-bold">{data.titleContact}</h2>
            <p>{data.desc1}</p>
            <p className="py-5">{data.desc2}</p>
            <div className="   pb-16 m-auto px-3 ">
              <button className="border-2 border-orange duration-150 hover:bg-lightGray group-hover:border-transparent  relative w-[170px] hover:w-[200px] rounded-sm p-3 ">
                <a className="text-[#FF4C2E] text-[20px]  font-meduim " href="/contactez-mur-mur">
                  Contacter-nous{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
