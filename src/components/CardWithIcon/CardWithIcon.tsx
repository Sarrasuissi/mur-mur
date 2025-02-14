import React from "react";

function CardWithIcon(props: {
  data: {
    icon?: string;
    title?: string;
    desc?: string;
    img?: string;
  };
  reverse?: boolean;
  clipath?: boolean;
  buttonContact?: boolean;
  withIcon?: boolean;
}) {
  const { buttonContact = false, withIcon = true } = props;
  return (
    <div className="m-auto  relative w-defaultwidth  ">
      <div
        className={`lg:flex gap-20   ${
          props.reverse ? "flex-row-reverse" : ""
        } `}
      >
        <div className="lg:basis-1/2 ">
          <img
            className="w-full lg:h-full max-h-[650px] object-center object-cover"
            alt={props.data.title}
            src={`/assets/images/${props.data.img}.webp`}
          />
        </div>
        <div className="basis-1/2 relative  m-auto w-defaultwidth py-3 ">
          {withIcon && (
            <img
              className="h-10 "
              alt="logo"
              src={`/assets/icons/${props.data.icon}.png`}
            />
          )}
          <h2 className="text-white pb-7 pt-10 text-[26px] font-bold ">
            {props.data.title}
          </h2>
          <p className="text-white text-[18px] lg:pb-5 pb-10 leading-[30px]">
            {props.data.desc}
          </p>

          {buttonContact && (
            <div className="">
              <a href="/Contactez-mur-mur">
                <div className=" absolute pb-5   group  right-0">
                  <button className="border-2 border-orange   group-hover:border-transparent  w-[170px] hover:w-[200px] rounded-lg p-3 ">
                    <p className="text-[#FF4C2E] text-[20px] font-meduim ">
                      Contacter-nous
                    </p>
                  </button>
                </div>
              </a>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default CardWithIcon;
