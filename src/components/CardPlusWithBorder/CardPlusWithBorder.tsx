import React, { useState } from "react";

function CardPlusWithBorder(props: {
  data: {
    title?: string;
    desc?: string;
    descPlus?: string;
  }[];
  withoutBorder?: boolean;
  bgColor?: string;
  typeTitle?: string;
  styleTitle?: string;
  styleDesc?:string;
  hoverBottom?: boolean;

}) {const{withoutBorder=false, bgColor="bg-[#F5F5F5] ",hoverBottom=false }=props;
  const [seeMore, setSeeMore] = useState(Array(props.data.length).fill(false));
  return (
    <div className="w-defaultwidth max-w-mwidth1 m-auto">
      <div className=" w-full     ">
        {props.data.map((item, index) => (
          <div className={`my-10 p-10 relative ${bgColor} `} key={index}>
            <div className="grid grid-cols-2 absolute w-full -translate-y-10 left-0">
              <div className={` ${withoutBorder?"":"border-orange border-2 "}  `}></div>
              <div className="border-transparent border-2   "></div>
            </div>
            {item.title &&
            (props.typeTitle ==="h2"? (
            <h2 className={`${props.styleTitle} font-semibold text-[24px] pb-5`}>{item.title}</h2>):(
              <p className={` ${props.styleTitle} font-semibold text-[24px] pb-5`}>{item.title}</p>
            ))
            }

            <p className={`py-5  ${props.styleDesc}`}>
              {item.desc}
              {seeMore[index] && (
                <div className={`${props.styleDesc}`}>
                  <p>{item.descPlus}</p>
                </div>
              )}
            </p>
            <div className="flex w-full pt-3 ">
              <button
                onClick={() => {
                  setSeeMore((prev) => {
                    const state = Array(props.data.length).fill(false);
                    state[index] = !prev[index];
                    return state;
                  });
                }}
                className={`cursor-pointer border-orange border-2 ms-auto  text-orange  px-4  ${hoverBottom? "hover:bg-orange hover:text-black px-7 py-2 text-[18px]":""} `}
              >
                {seeMore[index] ? "Voir moins" : "Voir plus"}
              </button>
            </div>
            <div className="grid grid-cols-2 absolute w-full bottom-0 right-0">
              <div className="border-transparent border-2   "></div>
              <div className={`${withoutBorder?"":"border-orange border-2 "} `}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPlusWithBorder;
