"use client";
import { Link } from "react-router-dom";
import { useState } from "react";

function CardOffresDemploi(props: {
  data: {
    titlecard?: string;
    poste: string;
    reference: string;
    Local: string;
    offremploi: string;
    desc1: string;
    desc2?: string;
    list1: { item: string }[];
    list2: { item: string }[];
  }[];
}) {
  const [seeMore, setSeeMore] = useState(Array(props.data.length).fill(false));
  return (
    <div className="w-defaultwidth m-auto max-w-mwidth2 py-10">
      {props.data.map((item, index) => (
        <div className="bg-[#EDEDED] my-14 relative  ">
          <div className="absolute top-0 left-0 w-1/2 h-1 border-t-4 border-orange"></div>

          <div className="lg:py-14 py-8 w-defaultwidth max-w-[1400px] m-auto">
            {item.titlecard && (
              <h1 className="font-bold py-14 text-orange ">{item.titlecard}</h1>
            )}
            <h2 className="text-black py-2 pb-6 font-bold text-xl">
              {item.poste}
            </h2>

            <div className="flex flex-wrap gap-4 justify-center text-center mb-4 py-4">
              {/* <img src="/assets/icons/localisation.webp" alt="" className="w-6 h-6" /> */}
              <p className="text-lg p-2 text-orange w-full sm:w-1/4">
                {item.Local}
              </p>
              <p className="text-lg p-2 text-orange w-full sm:w-1/4">
                Réf : {item.reference}
              </p>
              <p className="text-lg p-2 text-orange w-full sm:w-1/4">
                {item.offremploi}
              </p>
            </div>

            <p className="text-black py-2 font-bold">Description du Poste :</p>
            <p>{item.desc1}</p>

            {seeMore[index] && (
              <div>
                <p className="text-black py-2 font-bold">Missions :</p>
                <div className="ps-8 text-darkgray">
                  {item.list1.map((e, i) => (
                    <p className="py-2" key={i}>
                      {e.item}
                    </p>
                  ))}
                </div>
                <p className="text-black py-2 font-bold">Profil :</p>
                <div className="list-disc ps-8 pb-6 text-darkgray">
                  {item.list2.map((e, i) => (
                    <p className="py-2" key={i}>
                      {e.item}
                    </p>
                  ))}
                </div>
                {item.desc2 && <p>{item.desc2}</p>}
              </div>
            )}

            <div className="flex pt-10 justify-center space-x-4">
              <div className="flex space-x-4">
                <Link
                  to={{
                    pathname: "/Postuler",
                    // search: `?poste=${item.poste}&reference=${item.reference}&local=${item.Local}`,
                  }}
                  className="text-orange cursor-pointer border-orange border-2 p-2 px-10 hover:border hover:bg-gray-100 "
                >
                  Postuler
                </Link>

                <button
                  onClick={() => {
                    setSeeMore((e) => {
                      const state = Array(props.data.length).fill(false);
                      state[index] = !e[index];
                      return state;
                    });
                  }}
                  className="text-orange cursor-pointer border-orange border-2 p-2 px-10 hover:border hover:bg-gray-100 "
                >
                  {seeMore[index] ? "Voir moins" : "Voir plus"}
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-1/2 h-1 border-b-4 border-orange"></div>
        </div>
      ))}
    </div>
  );
}

export default CardOffresDemploi;
