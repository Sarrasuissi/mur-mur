function CardBigImgDesc(props: {
  data: {
    title?: string;
    desc?: string;
    img?: string;
    titleImg?: string;
    list?: { title?: string; desc?: string }[];
  };
  typeTitle?: string;
  colorTitle?: string;
  reverse?: boolean;
  marginImage?: string;
  marginDesc?: string;
  colorBorder?: string;
}) {
  const { reverse = false, colorTitle = "text-[#FF4C2E]" } = props;
  return (
    <div className={` md:grid grid-cols-3  md:gap-0     `}>
      <div
        className={`${props?.marginImage}  flex basis-1/3 ${
          reverse ? "md:order-3" : ""
        }`}
      >
        <img
          alt={props.data.titleImg}
          src={`/assets/images/${props.data.img}.webp`}
          title={props.data.titleImg}
          className="max-h-full  w-full bg-cover bg-no-repeat bg-center  "
        />
      </div>

      <div
        className={`${
          props?.marginDesc
        } md:flex basis-2/3  md:col-span-2 shadow-xl ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`w-[50px] h-full ${props?.colorBorder}
        `}
        ></div>
        <div className="m-auto w-defaultwidth  md:p-10 py-5">
          {props?.data.title &&
            (props.typeTitle === "h1" ? (
              <h1 className={`${colorTitle} py-4 text-[32px] font-semibold`}>
                {props.data.title}
              </h1>
            ) : props.typeTitle === "h2" ? (
              <h2 className={`${colorTitle} py-4 font-semibold text-[28px]`}>
                {props.data.title}
              </h2>
            ) : (
              <h3 className={`${colorTitle} py-4 font-semibold text-[24px]`}>
                {props.data.title}
              </h3>
            ))}

          {props?.data.desc && (
            <p className="py-3 text-[18px]">{props?.data.desc}</p>
          )}
          {props.data.list?.map((item, index) => (
            <div className="py-2" key={index}>
              <ul className="list-disc leading-relaxed">
                <li>
                  {item.title && (
                    <span className="font-semibold text-[18px]  ">
                      {item?.title}
                    </span>
                  )}
                  {item.desc && (
                    <span className="font-normal text-[18px] ">
                      {item?.desc}
                    </span>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardBigImgDesc;
