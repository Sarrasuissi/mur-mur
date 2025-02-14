import { useParams } from "react-router-dom";
import data from "../../data/nos-implantations.json";
import { Link } from "react-router-dom";
import CardShowMore from "../../components/CardShowMore/CardShowMore";
import CardContactWithMap from "../../components/CardContactWithMap/CardContactWithMap";
import { Helmet } from 'react-helmet';

const NosImplantationsPage = () => {
  const { region, slug } = useParams();

  const item = data.find((implantation) => {
    return implantation.slug[0] === region && implantation.slug[1] === slug;
  });

  if (!item) {
    return <p>Page non trouvée</p>;
  }

  return (
    <main>
      <div className="relative py-20">
      <Helmet>
        <title>{item.metaData?.title}</title>
        <meta name="description" content={item.metaData?.description} />
        <link rel="canonical" href="https://mur-mur.fr/"/>
        <meta property="og:title" content={item.metaData?.title} />
        <meta property="og:description" content={item.metaData?.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mur-mur.fr/" />
      </Helmet>
        <img
          alt={item.details.nom}
          className="absolute top-0 -z-10 h-full w-full object-cover filter  brightness-[75%]"
          src={`/assets/images/${item.details.img}.webp`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 px-2 md:px-10 lg:px-16 xl:px-44 lg:py-20">
          <div className="space-y-8">
            <strong
              className="pt-10 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-[700px]"
              style={{
                textShadow: "1px 1px 2px #000000",
              }}
            >
              {item.title}
            </strong>
            <div className="flex items-center space-x-2 md:space-x-3 py-5">
              <span className="text-3xl md:text-4xl font-bold text-white">
                4.6
              </span>
              {[...Array(5)].map((_, idx) => (
                <img
                  key={idx}
                  alt=""
                  title=""
                  className="w-6 md:w-8"
                  src="/assets/icons/start.webp"
                />
              ))}
            </div>
            <Link
              to="/contactez-mur-mur"
              className="flex w-fit bg-orange hover:border-2   py-2 px-6 md:px-10 font-bold text-white rounded-md transition duration-200 ease-in-out"
            >
              <span className="my-auto">Contactez le bureau</span>
            </Link>
          </div>

          <div>
            <div className="space-y-6 lg:space-y-8">
              <div className="flex flex-wrap gap-10 mx-28">
                <Link
                  to="#"
                  className="flex items-center justify-center hover:bg-orange border-2 py-3 px-10 font-bold text-white rounded-md w-full md:w-auto"
                >
                  <img
                    alt="recrutement"
                    title="Recrutement"
                    className="mr-3 w-5 md:w-6"
                    src="/assets/icons/recrutement.webp"
                  />
                  <span className="text-center">Recrutement</span>
                </Link>

                <Link
                  to="/contactez-mur-mur"
                  className="flex items-center justify-center bg-orange hover:border-2 py-3 px-10 font-bold text-white rounded-md w-full md:w-auto"
                >
                  <img
                    alt="phone"
                    title="Contact"
                    className="mr-3 w-5 md:w-6"
                    src="/assets/icons/phonewhite.webp"
                  />
                  <span className="text-center">Nous contacter</span>
                </Link>
              </div>

              <div className="pt-10">
                <div className="h-fit rounded-3xl bg-white shadow-2xl p-8 mx-auto md:max-w-lg lg:max-w-xl">
                  <span className="text-2xl md:text-3xl font-bold text-black">
                    {item.details.nom}
                  </span>
                  <ul className="space-y-6 mt-6">
                    <li className="flex items-center gap-3 font-bold text-lg">
                      <img
                        alt="email"
                        title="Email"
                        className="w-8"
                        src="/assets/icons/mail.webp"
                      />
                      <span>{item.details.email}</span>
                    </li>
                    <li className="flex items-center gap-3 font-bold text-lg">
                      <img
                        alt="horaire"
                        title="Horaire"
                        className="w-8"
                        src="/assets/icons/clock.webp"
                      />
                      <span>{item.details.horaire}</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <Link
                      to="https://www.google.tn/maps/dir//Rue+des+Halles,+75001+Paris,+France/@48.8598309,2.3439439,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66e1f16e9b61b:0x5d8c9ce77c820b96!2m2!1d2.3468647!2d48.8595699?hl=fr&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                      className="border-2 border-orange hover:text-orange p-3 font-bold text-black rounded-md lg:text-lg"
                    >
                      Voir sur Google maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 w-defaultwidth m-auto max-w-mwidth1">
        <h1 className=" text-orange  font-bold pb-10">
          {item.introduction.title}
        </h1>
        {item.introduction.paragraph.map((item, index) => (
          <div key={index} className="pb-6">
            <p>{item.desc}</p>
          </div>
        ))}

        {item.sectionDesc?.map((itemDesc, indexDesc) => (
          <div key={indexDesc}>
            {itemDesc.title && (
              <h2 className="text-orange font-bold pt-20">{itemDesc.title}</h2>
            )}
            {itemDesc.desc && <p className="pt-4">{itemDesc.desc}</p>}

            {"listDesc" in itemDesc &&
              itemDesc.listDesc?.map((descItem, indexList) => (
                <div key={indexList} className="py-2 ">
                  {descItem.subTitle && <strong>{descItem.subTitle}</strong>}
                  {descItem.desc && <p className="inline">{descItem.desc}</p>}
                </div>
              ))}
          </div>
        ))}

        {item.title1 && (
          <h2 className=" text-orange  font-bold pt-20 ">{item.title1}</h2>
        )}
        {item.desc1 && <p className="pt-4">{item.desc1}</p>}

        <div className="pt-12">
          <CardShowMore data={item.cardSeeMore || []} />
        </div>
        {item.titleTwo && (
          <>
            <h2 className=" text-orange  font-bold pt-20 ">{item.titleTwo}</h2>
            <div className="pt-12">
              <CardShowMore data={item.cardSeeMoreTwo || []} />
            </div>
          </>
        )}
        {item.titleContact && (
          <h2 className=" text-orange  font-bold pt-20 ">
            {item.titleContact}
          </h2>
        )}
        {item.descContact && <p className="pt-4">{item.descContact}</p>}
        <div className="xl:pb-56 sm:pb-44 pb-[60%] py-20">
          <CardContactWithMap data={item.contact || {}} />
        </div>
      </section>
    </main>
  );
};

export default NosImplantationsPage;
