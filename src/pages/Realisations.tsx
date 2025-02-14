import data from "../data/realisation-etude-mur-porteur.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
const allBlogs = data.allRealisations.flatMap((e) =>
  e.realisationsItems.map((itemTwo) => ({
    ...itemTwo,
    slugPageRealisation: itemTwo.slugPageRealisation,
    categoryRealisation: e.categoryRealisation,
    category: e.category,
  }))
);

export default function CardActualites() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocalisation, setSelectedLocalisation] = useState("");
  const [isLocalisationOpen, setIsLocalisationOpen] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLocalisationClick = (localisation: string) => {
    setSelectedLocalisation(localisation);
    setIsLocalisationOpen(false);
  };

  const uniqueCategories = Array.from(
    new Set(allBlogs.flatMap((item) => item?.category))
  ).filter(Boolean);

  const uniqueLocalisations = Array.from(
    new Set(allBlogs.flatMap((item) => item?.localisation?.toLowerCase()))
  ).filter(Boolean);

  const applyFilters = () => {
    const filtered = allBlogs.filter(
      (item) =>
        (selectedCategory === "" || item.category === selectedCategory) &&
        (selectedLocalisation === "" ||
          item.localisation?.toLowerCase() ===
            selectedLocalisation.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="w-full max-w-mwidth1 mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="pt-20">
        <h1 className="text-center font-bold  text-orange text-2xl sm:text-3xl">
          Découvrez toutes nos réalisations
        </h1>

        <div className="pt-14 pb-10 flex flex-col md:flex-row md:items-center lg:gap-8  xl:gap-32">
          <div className="relative flex items-center gap-2">
            <p className="font-semibold">Filtrer par catégorie :</p>
            <select
              className="underline px-4 py-2 cursor-pointer text-center "
              onChange={(e) => handleCategoryClick(e.target.value)}
              value={selectedCategory}
            >
              <option value="">Sélectionner une catégorie</option>
              {uniqueCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="relative flex items-center gap-2">
            <p className="font-semibold">Filtrer par localisation :</p>

            <button
              className="underline px-4 py-2 cursor-pointer "
              onClick={() => setIsLocalisationOpen(!isLocalisationOpen)}
            >
              {selectedLocalisation
                ? `Localisation: ${selectedLocalisation}`
                : "Sélectionner une localisation"}
            </button>

            {isLocalisationOpen && (
              <div className="absolute top-10 z-10 w-full max-h-40 overflow-y-auto border border-gray-300 bg-white shadow-md mt-2 rounded-md">
                <ul className="list-none p-0 m-0">
                  {uniqueLocalisations.map((localisation, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLocalisationClick(localisation)}
                    >
                      {localisation.charAt(0).toUpperCase() +
                        localisation.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            className="bg-orange text-white px-5 py-2 mt-4 md:mt-0 uppercase rounded-md w-full md:w-auto"
            onClick={applyFilters}
          >
            Filtrer
          </button>
        </div>
      </div>

      <div className="lg:pb-20 lg:pt-7 py-10">
        {filteredBlogs.length === 0 && (
          <p className="text-center text-red-600 font-semibold">
            Aucune réalisation ne correspond à vos filtres.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredBlogs.map((item, index) => (
            <div className="shadow-xl overflow-hidden" key={index}>
              <Link
                to={`/${item.categoryRealisation}/${item.slugPageRealisation}`}
              >
                <img
                  src={`/assets/images/${item.img}.webp`}
                  alt={item.title}
                  title={item.title}
                  className="w-full h-[200px] sm:h-[250px] object-cover"
                />
              </Link>
              <div className="p-5 mb-10">
                <Link
                  to={`/${item.categoryRealisation}/${item.slugPageRealisation}`}
                >
                  <h2 className="font-bold text-lg sm:text-xl pb-6 text-orange">
                    {item.title}
                  </h2>
                </Link>
                <div className=" text-sm sm:text-base">
                  <p>
                    <strong>Localisation :</strong> {item.localisation}
                  </p>
                  <p className="py-2">
                    <strong>Surface :</strong> {item.surface}
                  </p>
                  <p>
                    <strong>Budget :</strong> {item.Budget}
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    to={`/${item.categoryRealisation}/${item.slugPageRealisation}`}
                  >
                    <div className="flex justify-center">
                      <button className="bg-orange text-white px-4 py-2 text-sm sm:text-base">
                        Voir réalisation
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
