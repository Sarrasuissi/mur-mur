import React from "react";

function CardImage(props: {
  data: {
    img?: string;
    titleImg?: string;
    title?: string;
    listDesc?: { subTitle?: string; desc?: string }[];
  };
}) {
  return (
    <div className="grid lg:grid-cols-2 ">
      <div
        className="py-64 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient( rgba(255, 255, 255, 0)  0.50%, #000000 100%), url(assets/images/${props.data.img}.webp)`,
        }}
      >
        <h2 className="text-center text-white font-bold">{props.data.title}</h2>
      </div>
      <div className="m-auto">
        {props.data.listDesc?.map((item, index) => (
          <div key={index} className="px-14 py-8 xl:me-28 xl:ms-10 ">
            <h3 className="text-orange font-bold pb-2 text-xl inline">
              {item.subTitle}
            </h3>
            <p className="inline">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardImage;
