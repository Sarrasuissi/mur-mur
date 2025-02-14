import React from "react";

function CardWithBorder(props: {
  data: {
    img?: string;
    title?: string;
    desc?: string;
  };
  styleTitle?: string;
  bgColor?: string;
  color?: string;
  reverse?: boolean;
  marginCard?: string;
  titleColor?: string;
  bgBorder?: string;
}) {
  const { reverse = false, bgBorder = "bg-orange" } = props;
  return (
    <div className="relative">
      <div className="w-defaultwidth  m-auto max-w-mwidth1  ">
        <div
          className={`m-auto lg:flex lg:flex-nowrap  ${
            props.bgColor
          }   h-full ${reverse ? "flex-row-reverse" : ""} `}
        >
          <div className="basis-[5%] grid grid-rows-3 ">
            <div className={`${props?.color} w-full h-full row-span-1`}></div>
            <div className={`${bgBorder} row-span-2`}></div>
          </div>
          <div className="bg-orange  lg:mt-52 mt-10"></div>
          <div className=" lg:basis-9/12  px-7 flex m-auto  ">
            <div className=" md:px-10">
              <div className={`bg-orange h-1 w-28 `}></div>
              <h2
                className={`font-bold py-7 text-[26px] ${props.styleTitle} ${props.titleColor}`}
              >
                {props.data.title}
              </h2>
              <p className="max-w-widthCard1 text-[18px]">{props.data.desc}</p>
            </div>
          </div>
          <div
            className={`lg:basis-4/12 lg:pt-0 pt-7  flex ${props?.marginCard}`}
          >
            <img
              className=" object-cover lg:h-full max-h-[500px] w-full"
              src={`/assets/images/${props.data.img}.webp`}
              alt={props.data.title}
              title={props.data.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithBorder;
