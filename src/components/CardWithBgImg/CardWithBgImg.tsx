function CardWithBgImg(props: {
  data: {
    img: string;
    desc: string;
    title?: string;
  };
  typeOfTitle?: string;
  btn?: boolean;
}) {
  const { btn = false } = props;
  return (
    <div
      className="bg-[#00000067] py-32 bg-no-repeat bg-cover bg-center bg-blend-overlay "
      style={{ backgroundImage: `url(assets/images/${props.data.img}.webp)` }}
    >
      <div className="w-defaultwidth m-auto max-w-mwidth2">
        {props.data.title && props.typeOfTitle !== "h2" ? (
          <h2 className="text-white pb-8 text-[30px] font-semibold">
            {props.data.title}
          </h2>
        ) : props.typeOfTitle !== "h3" ? (
          <h3 className="text-white pb-8 text-[30px] font-semibold">
            {props.data.title}
          </h3>
        ) : (
          <p className="text-white pt-8 text-[30px] font-semibold">
            {props.data.title}
          </p>
        )}

        <p className="text-white text-[20px] leading-10">{props.data.desc}</p>
        {btn && (
          <div className="pt-10">
            <a
              className="text-white border-2 border-white px-6 py-2 rounded-md text-[20px]"
              href="/contactez-mur-mur"
            >
              Contactez
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardWithBgImg;
