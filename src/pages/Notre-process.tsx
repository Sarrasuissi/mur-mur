import CardImage from "../components/CardImage/CardImage";
import SliderWithClipPath from "../components/SliderWithClipPath/SliderWithClipPath";
import VimeoVideo from "../components/VimeoVideo/VimeoVideo";
import data from "../data/notre-process.json";
import { Helmet } from 'react-helmet';
function page() {
  return (
    <div className="overflow-hidden">
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
      <SliderWithClipPath data={data.slider} />
      <section className="md:pt-24 pt-16 w-defaultwidth m-auto max-w-mwidth1">
        <h1 className="pb-4">{data.title}</h1>
        <p>{data.desc}</p>
      </section>
      <section className="sm:py-8 py-7">
        <VimeoVideo />
      </section>

      <section className=" w-defaultwidth m-auto max-w-mwidth1">
        <h2 className="text-orange font-bold pb-4">{data.title2}</h2>
        <div>
          {data.cardDesc.map((item, index) => (
            <div key={index} className="py-8 ">
              <div className="bg-[#f5f5f5] py-8 p-6 rounded-3xl">
                <h3 className="pb-3">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="md:py-20 py-10">
        <CardImage data={data.expertises} />
      </section>
      <section
        className="py-48 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(assets/images/notre-process/clip-path-image.webp)`,
        }}
      >
        <div className="w-defaultwidth m-auto max-w-mwidth1 text-center">
          <h2 className="font-bold text-[#3F4040] pt-7">{data.cardDevis.title}</h2>
          <p className="text-white py-12">{data.cardDevis.desc}</p>
          <div className="text-center group pb-10">
            <a href="/notre-process">
              <button className="  bg-[#3F4040]   relative w-[250px] hover:w-[300px]  p-3 ">
                <p className="text-white text-[20px]  font-meduim ">
                  Demander un devis
                </p>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
