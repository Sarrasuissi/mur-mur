function CardDesc(props: {
  data: {
    title?: string;
    subTitle?: string;
    desc?: string;
  };
  typeSubtitle?: string;
  styleTitle?: string;
}) {
  return (
    <div>
      <div className="">
        
        <h1
          className={`text-[#FF4C2E] text-[32px]  text-start md:pb-16 pb-5 font-bold max-w-mwidth2 ${props.styleTitle} `}
        >
          {props.data.title}
        </h1>
        {props?.data.subTitle &&
          (props.typeSubtitle === "h2" ? (
            <h2 className="">{props.data.subTitle}</h2>
          ) : props.typeSubtitle === "h3" ? (
            <h3 className="">{props.data.subTitle}</h3>
          ) : (
            <p className="font-bold text-[20px] pb-7">{props.data.subTitle}</p>
          ))}
        <p className="text-[18px] leading-[35px]">{props.data.desc}</p>
      </div>
    </div>
  );
}

export default CardDesc;
