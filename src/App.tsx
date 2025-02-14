import "./App.scss";
import CardAvis from "./components/CardAvis/CardAvis";
import CardCitation from "./components/CardCitation/CardCitation";
import CardImgWithBorder from "./components/CardImgWithBorder/CardImgWithBorder";
import CardWithBgImg from "./components/CardWithBgImg/CardWithBgImg";
import CarouselServices from "./components/CarouselServices/CarouselServices";
import Slider from "./components/slider/Slider";
import data from "./data/home.json";
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="">
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
      <div className="text-center grid gap-6 md:py-16 py-10 w-defaultwidth m-auto ">
        <h1 className="pb-4 font-bold">{data.intro.title}</h1>
        <p className="">{data.intro.desc1}</p>
        <p className="">{data.intro.desc2}</p>
      </div>
      <div className="bg-lightGray my-20 lg:py-28 py-16">
        <div className="m-auto w-defaultwidth  max-w-mwidth1">
      <img
              className="h-7 mb-7 "
              alt="logo"
              src={`/assets/icons/double-carre.png`}
            />
        <h2 className=" font-semibold pb-10">Nos Service</h2>
        </div>
        <CarouselServices data={data.services} />
      </div>
      <div className="py-10 mt-32">
        <CardImgWithBorder data={data.expertise} />
      </div>
      <div className="py-10">
        <CardImgWithBorder data={data.approche} reverse />
      </div>
      <div className="py-10">
        <CardImgWithBorder data={data.qualite} />
      </div>
      <div className="py-10">
        <CardCitation />
      </div>
      <div className="py-10 w-defaultwidth m-auto max-w-mwidth1 ">
        <h2 className="text-orange font-semibold">Les Avis de Nos Clients</h2>
      </div>
      <div className="">
        <CardAvis data={data.avis} />
      </div>
      <div className="flex py-7">
        <a className="cursor-pointer bg-orange m-auto text-white px-4 py-5  text-[22px] "  href="/reviews">Évaluez votre expérience récente</a>
      </div>
      <div className=" py-10">
        <CardWithBgImg typeOfTitle="h2" btn data={data.contact} />
      </div>
    </div>
  );
}

export default App;
