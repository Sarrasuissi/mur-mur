"use client";
import data from "../../data/Actualites-mur-mur.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { Helmet } from 'react-helmet';
const allBlogs = data.allBlogs.flatMap((e) =>
  e.blogsItems.map((itemTwo) => ({
    ...itemTwo,
    slugPage: itemTwo.slugPage,
    slugCategory: e.slugCategory,
    category: e.category,
  }))
);

export default function CardActualites() {
  const [category, setCategory] = useState("");
  const [numberPagination, setNumberPagination] = useState<number>(0);
  const viewData = 3;

  const handleCategoryClick = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setNumberPagination(0); // Reset pagination when category changes
  };

  const filteredBlogs = category === "" 
    ? allBlogs 
    : allBlogs.filter((blog) => blog.category === category);

  const paginatedBlogs = filteredBlogs.slice(numberPagination, numberPagination + viewData);

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
      <div className="w-defaultwidth max-w-mwidth1 m-auto lg:pb-20 lg:pt-7 py-10">
        <h1 className="text-orange font-bold mb-10">ACTUALITÉS</h1>
        <div className="pb-8">
          <ul className="flex flex-wrap gap-4">
            <li
              className="cursor-pointer flex max-h-20 text-white bg-black font-bold text-[20px] my-auto hover:bg-white hover:text-black border-black border-2 px-[30px] py-1"
              onClick={() => handleCategoryClick("")}
            >
              <p className="m-auto">Tous</p>
            </li>
            {data.allBlogs.map((item, index) => (
              <li
                className={`cursor-pointer flex bg-black font-bold text-[20px] border-black border-2 px-[30px] py-1 ${
                  category === item.category
                    ? "bg-white text-black border-black border-2 my-auto"
                    : "text-white"
                }`}
                onClick={() => handleCategoryClick(item.category)}
                key={index + 1}
              >
                <p className="m-auto">{item.category}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-10 gap-4">
            {paginatedBlogs.map((item, index) => (
              <div className="shadow-xl" key={index + 1}>
                <Link to={`/actualites-mur-mur/${item.slugCategory}/${item.slugPage}`}>
                  <img
                    src={`/assets/images/blogs/${item.img}.webp`}
                    alt={item.title}
                    title={item.title}
                    className="w-full max-h-[270px]"
                  />
                </Link>
                <div className="2xl:p-8 p-5 min-h-[100px] py-6 bg-black">
                  <Link to={`/actualites-mur-mur/${item.slugCategory}/${item.slugPage}`}>
                    <h1 className="font-bold text-sm text-white">{item.title}</h1>
                  </Link>
                </div>
                <div className="px-5 py-7">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="flex gap-1 m-auto">
                      <img src="/assets/icons/user.webp" alt="user" className="h-5" />
                      <span className="xl:text-sm text-[12px]">{item.user}</span>
                    </div>
                    <div className="flex gap-1 m-auto">
                      <img src="/assets/icons/date.webp" alt="date" className="h-5" />
                      <span className="xl:text-sm text-[12px]">{item.date}</span>
                    </div>
                    <div className="flex gap-1 m-auto">
                      <img src="/assets/icons/comments.webp" alt="comments" className="h-5" />
                      <span className="xl:text-sm text-[12px]">{item.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="min-h-[200px] pb-7">
                  <div className="px-10">
                    {item.listDesc.map((e, i) => (
                      <div key={i}>
                        <p className={i === 0 ? "block" : "hidden"}>
                          {e.desc && e.desc.length > 100 ? `${e.desc.slice(0, 100)}...` : e.desc}
                        </p>
                      </div>
                    ))}
                    <Link to={`/actualites-mur-mur/${item.slugCategory}/${item.slugPage}`}>
                      <div className="cursor-pointer bg-white mt-10 text-black border-[1px] border-black hover:text-white hover:bg-black p-3 px-5 w-fit">
                        Read More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          datablogLength={filteredBlogs.length}
          changeNumber={setNumberPagination}
          viewData={viewData}
          numberPagination={numberPagination}
        />
      </div>
    </div>
  );
}