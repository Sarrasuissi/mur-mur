import CardBigImgDesc from "../../components/CardBigImgDesc/CardBigImgDesc";
import CardDesc from "../../components/CardDesc/CardDesc";
import CardWithIcon from "../../components/CardWithIcon/CardWithIcon";
import Slider from "../../components/slider/Slider";
import data from "../../data/Suivi-travaux-mur-porteur.json";
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
      <section className="md:pt-24 pt-16 pb-10 w-defaultwidth m-auto max-w-mwidth1">
        <div className="pb-7">
          <CardDesc data={data.intro} />
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
            buttonContact={false}
          />
        </div>
        <div
          className="bg-orange h-16"
          style={{ clipPath: "polygon( 50% 0, 100% 0, 100% 100%,54% 100%)" }}
        ></div>
      </section>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1 relative">
        <CardBigImgDesc
          data={data.solutions}
          colorTitle="text-black"
          marginDesc=""
          colorBorder="bg-gray"
          typeTitle="h2"
        />
      </div>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.materiaux}
          reverse
          colorTitle="text-black"
          marginDesc="md:my-8"
          colorBorder="bg-gray"
          typeTitle="h2"
        />
      </div>
      <div className="py-16 w-defaultwidth m-auto max-w-mwidth1">
        <CardBigImgDesc
          data={data.satisfaction}
          colorTitle="text-black"
          marginDesc=""
          colorBorder="bg-white"
          typeTitle="h2"
          reverse
        />
      </div>

      <div className="  shadow-xl text-center pb-16 m-auto px-3 ">
        <button className="border-2 border-orange duration-150  hover:bg-lightGray group-hover:border-transparent  relative w-[170px] hover:w-[200px] rounded-sm p-3 ">
          <p className="text-[#FF4C2E] text-[20px]  font-meduim ">
            Contacter-nous{" "}
          </p>
        </button>
      </div>
    </div>
  );
}

export default page;
