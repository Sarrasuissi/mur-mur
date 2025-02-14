import parse from "html-react-parser";
import dataAvis from "../data/avis.json";
import { Helmet } from 'react-helmet';
import data from "../data/realisation-etude-mur-porteur.json";
import { useParams } from "react-router-dom";

import ImgSidebar from "../components/ImgSidebar/ImgSidebar";
import AvisBlog from "../components/AvisBlog/AvisBlog";
import CardAvis from "../components/CardAvis/CardAvis";
import CardRealisations from "../components/CardRealisations/CardRealisations";

interface BlogItem {
  id?: number;
  slugPageRealisation?: string;
  title?: string;
  user?: string;
  category?: string;
  metaData?: {
    title?: string;
    description?: string;
  };
  date?: string;
  comments?: number | string;
  img1?: string;
  img2?: string;
  img?: string;
  listDesc?: {
    title?: string;
    subTitle?: string;
    title1?: string;
    desc?: string;

    subList?: {
      title?: string;
      subtitle?: string;
      desc?: string;
      descWithLink?: { link?: string; desc?: string }[];
    }[];
  }[];
}
interface BlogCategory {
  categoryRealisation?: string;
  id?: number;
  category?: string;
  realisationsItems?: BlogItem[];
}
interface Data {
  allRealisations: BlogCategory[];
}
const Page: React.FC = () => {
  const { categoryRealisation, slugPageRealisation } = useParams<{
    categoryRealisation: string;
    slugPageRealisation: string;
  }>();
  const typedData = data as Data;
  const category = typedData.allRealisations.find(
    (cat) => cat.categoryRealisation === categoryRealisation
  );
  const page = category?.realisationsItems?.find(
    (p) => p?.slugPageRealisation === slugPageRealisation
  );
  if (!page) {
    return <div>Page introuvable </div>;
  }
  return (
    <div className="bg-white">
      <Helmet>
        <title>{page.metaData?.title}</title>
        <meta name="description" content={page.metaData?.description} />
        <link rel="canonical" href="https://mur-mur.fr/"/>
        <meta property="og:title" content={page.metaData?.title} />
        <meta property="og:description" content={page.metaData?.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mur-mur.fr/" />
      </Helmet>
      <div className={`w-defaultwidth m-auto max-w-mwidth1 lg:px-0 px-5 `}>
        <div className="">
          <div className=" m-auto">
            <div className="py-7">
              <h1 className="pb-7 max-w-width1000 text-orange font-bold">
                {page.title}
              </h1>
            </div>
            <div className="mb-7 grid gap-4 grid-cols-3">
              <img
                className="col-span-2 h-full object-cover w-full "
                src={`/assets/images/${page.img}.webp`}
                alt={page.title}
                title={page.title}
              />
              <div className="grid gap-4">
                <img
                  className=" object-cover w-full "
                  src={`/assets/images/${page.img1}.webp`}
                  alt={page.title}
                  title={page.title}
                />
                <img
                  className=" object-cover w-full "
                  src={`/assets/images/${page.img2}.webp`}
                  alt={page.title}
                  title={page.title}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="py-5 col-span-1 sm:col-span-2">
                {page.listDesc?.map((item, index) => (
                  <div key={index}>
                    {item.title && (
                      <h2 className="text-orange font-semibold py-2">
                        {item.title}
                      </h2>
                    )}
                    {item.subTitle && (
                      <h3 className="text-orange font-normal py-2">
                        {item.subTitle}
                      </h3>
                    )}
                    {item.title1 && (
                      <p className="font-bold py-3">{item.title1}</p>
                    )}
                    {item.desc && (
                      <p className="pt-2 pb-10"> {parse(item.desc)}</p>
                    )}

                    {item?.subList && (
                      <ul className="py-2">
                        {item?.subList?.map((itemList, index) => (
                          <li className="list-disc ml-5 pb-2" key={index}>
                            {itemList.title && (
                              <strong className="">{itemList.title}</strong>
                            )}
                            {itemList.desc && (
                              <span className="text-lg">
                                {parse(itemList.desc)}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <section className="pt-10">
                  <div className="">
                    <h2 className="font-bold">Nos Réalisations</h2>
                  </div>
                  <CardRealisations />
                </section>
              </div>
              <div className="hidden lg:block ps-8">
                <div className="col-span-1 relative shadow-xl p-8">
                  <div className="h-full w-[0.5px] absolute left-0"></div>
                  <div className="lg:max-w-widthCard450 m-auto ml-10">
                    <div className="mt-10">
                      <ImgSidebar />
                    </div>
                    <AvisBlog data={dataAvis.avis} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-10">
        <p className="py-6">Les avis de</p>
        <h2 className="font-bold">Nos Clients</h2>
      </div>
      <div className="pb-20">
        <CardAvis data={data.avis} />
      </div>
    </div>
  );
};

export default Page;
