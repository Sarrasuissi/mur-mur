import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import data from "../../data/realisation-etude-mur-porteur.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const allBlogs = data.allRealisations.flatMap((e) =>
  e.realisationsItems.map((item) => ({
    ...item,
    slugPageRealisation: item.slugPageRealisation,
    categoryRealisation: e.categoryRealisation,
    category: e.category,
  }))
);

export default function CardRealisations() {
  const [showAll, setShowAll] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const limitedBlogs = showAll ? allBlogs : allBlogs.slice(0, 4);

  return (
    <div className="relative">
      <div className="text-end mb-5">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-orange underline"
        >
          {showAll ? "Voir moins »" : "Voir tous »"}
        </button>
      </div>

      {showAll ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
          {limitedBlogs.map((item, index) => (
            <div key={index} className="shadow-xl overflow-hidden mx-5">
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
                  <h2 className="font-bold text-md sm:text-lg pb-4 text-orange h-[100px] sm:h-[100px]">
                    {item.title}
                  </h2>
                  <h3 className="text-md sm:text-lg text-light pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-6">
                    {item.category}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {allBlogs.map((item, index) => (
            <div className="">
              {" "}
              <div key={index} className="shadow-xl overflow-hidden mx-10">
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
                    <h2 className="font-bold text-lg sm:text-xl pb-6 text-orange w-full h-[100px] sm:h-[100px]">
                      {item.title}
                    </h2>

                    <h3 className="text-lg text-light pt-10 xl:pt-0">
                      {item.category}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
