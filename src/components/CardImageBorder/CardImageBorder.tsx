import React from "react";

function CardImageBorder(props: {
  data: {
    img?: string;
    titleImg?: string;
    title?: string;
    desc?: string;
  };
}) {
  return (
    <div className="grid md:grid-cols-2 bg-gray h-fit py-20 text-white">
      <div
        className=" xl:w-[680px] h-full absolute bg-orange z-1 right-0 top-0"
        style={{
          clipPath:
            "polygon(78% 0, 100% 0, 100% 60%, 100% 100%, 36% 100%, 36% 90%, 78% 90%)",
        }}
      ></div>
      <div className="m-auto me-32">
        <h2 className="pb-8 font-bold">{props.data.title}</h2>
        <p>{props.data.desc}</p>
      </div>
      <div className="">
        <img
          src={`/assets/images/${props.data.img}.webp`}
          title={props.data.titleImg}
          alt={props.data.titleImg}
          className="h-full translate-y-3  w-full object-cover object-center border-white border-[20px] "
        />
      </div>
    </div>
  );
}

export default CardImageBorder;
