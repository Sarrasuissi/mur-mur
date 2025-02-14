import parse from "html-react-parser";
import data from "../../../data/Actualites-mur-mur.json";
import { Link, useParams } from "react-router-dom";
import CardFormeBlog from "../../../components/CardFormeBlog/CardFormeBlog";
import AvisBlog from "../../../components/AvisBlog/AvisBlog";
import dataAvis from "../../../data/avis.json";
import ImgSidebar from "../../../components/ImgSidebar/ImgSidebar";
import { Helmet } from 'react-helmet';
interface BlogItem {
  id?: number;
  slugPage?: string;
  title?: string;
  user?: string;
  category?: string;
  metaData?: {
    title?: string;
    description?: string;
  };
  date?: string;
  comments?: number | string;
  img?: string;
  listDesc?: {
    title?: string;
    subTitle?: string;
    title1?: string;
    desc?: string;
    img2?: String;
    descWithLink?: { link?: string; desc?: string; title1?: string }[];
    subList?: {
      title?: string;
      subtitle?: string;
      desc?: string;
      descWithLink?: { link?: string; desc?: string }[];
    }[];
    subListNum?: {
      title?: string;
      desc?: string;
      descWithLink?: { link?: string; desc?: string }[];
    }[];
  }[];
}
interface BlogCategory {
  slugCategory?: string;
  id?: number;
  category?: string;
  blogsItems?: BlogItem[];
}
interface Data {
  allBlogs: BlogCategory[];
}
const Page: React.FC = () => {
  const { slugCategory, slugPage } = useParams<{
    slugCategory: string;
    slugPage: string;
  }>();
  const typedData = data as Data;
  const category = typedData.allBlogs.find(
    (cat) => cat.slugCategory === slugCategory
  );
  const page = category?.blogsItems?.find((p) => p?.slugPage === slugPage);
  if (!page) {
    return <div>Page introuvable </div>;
  }
  return (
    <div className="bg-white">
       <Helmet>
        <title>{page.metaData?.title}</title>
        <meta name="description" content={page.metaData?.description} />
        <link rel="canonical" href={`https://mur-mur.fr/${slugCategory}/${page.slugPage}`} />
        <meta property="og:title" content={page.metaData?.title} />
        <meta property="og:description" content={page.metaData?.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mur-mur.fr/${slugCategory}/${page.slugPage}`} />
      </Helmet>
      <div className={`w-defaultwidth m-auto max-w-mwidth1 lg:px-0 px-5 `}>
        <div className="lg:grid gap-10 lg:grid-cols-3">
          <div className="col-span-2  m-auto">
            <div className="py-7">
              <h1 className="pb-7 max-w-width1000 text-orange font-bold">
                {page.title}
              </h1>
              Par<span className="text-[#999898] "> {page?.user}</span> |{" "}
              <span>{page?.date}</span> |{" "}
              <span className="text-[#999898] ">{category?.category}</span> |{" "}
              <span className="text-[#999898] ">
                {" "}
                {page.comments} commentaires{" "}
              </span>
            </div>
            <div className="mb-7">
              <img
                className="max-h-[550px] h-full object-cover w-full "
                src={`/assets/images/blogs/${page.img}.webp`}
                alt={page.title}
                title={page.title}
              />
            </div>
            <div className="py-5">
              {page.listDesc?.map((item, index) => (
                <div className="" key={index}>
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
                  {item.desc && <p className="pt-2"> {parse(item.desc)}</p>}
                  {item.descWithLink &&
                    item?.descWithLink?.map((itemLink, index) => (
                      <span className="text-[18px] leading-relaxed" key={index}>
                        {itemLink.title1 && <p>{itemLink.title1}</p>}
                        {itemLink.link ? (
                          <Link to={itemLink.link} className="text-orange ">
                            {" "}
                            {itemLink.desc}{" "}
                          </Link>
                        ) : (
                          <span>{parse(`${itemLink?.desc}`)}</span> 
                        )}
                      </span>
                    ))}
                  {item?.subList && (
                    <ul className="py-2">
                      {" "}
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
                          {itemList.descWithLink &&
                            itemList?.descWithLink?.map((itemLink, index) => (
                              <span key={index} className="">
                                {itemLink?.link ? (
                                  <Link
                                    className="text-orange"
                                    to={itemLink?.link}
                                  >
                                   <span>{itemLink.desc}</span>
                                  </Link>
                                ) : (
                                  <span>{parse(`${itemLink?.desc}`)}</span>
                                )}
                              </span>
                            ))}
                        </li>
                      ))}
                    </ul>
                  )}
                   {item?.subListNum && (
                    <ul className="py-2 list-decimal">
                      {" "}
                      {item?.subListNum?.map((itemlist, index) => (
                        <li className="list-decimal ml-5 pb-2" key={index}>
                          {itemlist.title && (
                            <strong className="">{itemlist.title}</strong>
                          )}
                          {itemlist.desc && (
                            <span className="text-lg">
                              {parse(itemlist.desc)}
                            </span>
                          )}
                          {itemlist.descWithLink &&
                            itemlist?.descWithLink?.map((itemLink, index) => (
                              <span key={index} className="">
                                {itemLink?.link ? (
                                  <Link
                                    className="text-orange"
                                    to={itemLink?.link}
                                  >
                                   <span>{itemLink.desc}</span>
                                  </Link>
                                ) : (
                                  <span>{parse(`${itemLink?.desc}`)}</span>
                                )}
                              </span>
                            ))}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="my-5">
                  {item.img2 &&  <img className="max-h-[550px] h-full object-cover w-full " src={`/assets/images/blogs/${item.img2}.webp`} alt={page.title}
                title={page.title} />}
                  </div>
                </div>
              ))}
            </div>
            <div className="py-5">
              <h3 className="text-orange pb-5">Poster le commentaire</h3>
              <p>
                Votre adresse e-mail ne sera pas publiée. Les champs
                obligatoires sont indiqués avec *
              </p>
              <div className="my-7">
                <CardFormeBlog />
              </div>
            </div>
          </div>
          <div className="col-span-1 relative">
            <div className="lg:bg-gray h-full w-[0.5px] absolute left-0 "></div>
            <div className="lg:max-w-widthCard450 m-auto ml-5">
              <div className="mt-10 ">
                <ImgSidebar />
              </div>
              <AvisBlog data={dataAvis.avis} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
