"use client";
import { useState } from "react";

function CardShowMore(props: {
  data: {
    title?: string;
    listDesc?: { desc?: string }[];
  }[];
}) {
  const initialArray = Array(props.data.length).fill(false);
  const [seeMore, setSeeMore] = useState(initialArray);

  return (
    <div>
      {props.data.map((item, index) => (
        <div
          className="border-[#D9D9D9] border py-6 bg-[#FAFAFA] p-8"
          key={index}
          onClick={() => {
            setSeeMore((e) => {
              const state = [...e];
              state[index] = !state[index];
              return state;
            });
          }}
        >
          <div className="flex items-center">
            <h2 className="text-lg font-semibold ">{item.title}</h2>
            <p className="ms-auto text-2xl cursor-pointer bg-orange rounded-full flex w-5 h-5 text-white">
              <span className="m-auto font-bold text-sm">
                {seeMore[index] ? "-" : "+"}
              </span>
            </p>
          </div>

          <div>
            {item.listDesc?.map((item2, index2) => (
              <div key={index2} className="pt-2">
                <p>{seeMore[index] ? item2.desc : ""}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardShowMore;
