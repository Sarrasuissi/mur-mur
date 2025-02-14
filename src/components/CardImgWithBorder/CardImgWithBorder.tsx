import React from "react";

function CardImgWithBorder(props: {
  data: {
    img?: string;
    titleImg?: string;
    title?: string;
    intro: {
      subTitle?: string;
      desc?: string;
    }[];
  };
  reverse?: boolean;
}) {
  const{reverse = false}=props;
  return (
    <div className="w-defaultwidth max-w-mwidth1 m-auto">
      <div className="border-orange border-t-8 w-full relative lg:py-5 ">
        {props.data.title && (
          <h2 className="text-orange font-semibold absolute bg-white max-w-widthCard450 -top-36 py-3 ">
            {props.data.title}
          </h2>
        )}
      </div>
      <div
        className={`lg:flex flex-nowrap gap-5 ${
          reverse ? "flex-row-reverse" : ""
        } `}
      >
        <div className="basis-1/2">
          {props.data.intro.map((item, index) => (
            <div className="m-auto" key={index}>
              {item.subTitle && (
                <h3 className="font-semibold py-3">{item.subTitle}</h3>
              )}
              {item.desc && (
                <p className="py-3 max-w-widthCard1">
                  <span className="font-bold ">•</span> {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="basis-1/2">
          <img
            className="object-cover"
            src={`/assets/images/${props.data.img}.webp`}
            alt={props.data.titleImg}
            title={props.data.titleImg}
          />
        </div>
      </div>
    </div>
  );
}

export default CardImgWithBorder;
