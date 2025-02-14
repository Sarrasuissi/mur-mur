function CardImagesShadow(props: {
  data: {
    img?: string;
    titleImg?: string;
    title?: string;
    desc?: string;
  }[];
  grid?: boolean;
}) {
  const { grid = false } = props;
  return (
    <div
      className={`${
        grid ? "xl:grid-cols-2" : " xl:grid-cols-3 lg:grid-cols-2"
      } grid gap-14`}
    >
      {props.data.map((item, index) => (
        <div key={index} className="shadow-2xl">
          <div
            className="relative bg-[#00000067] py-32 bg-no-repeat bg-cover bg-center min-h-[550px] p-10"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 46%, rgba(255, 255, 255, 0.86) 71%, #ffffff 100%), url(/assets/images/${item.img}.webp)`,
            }}
          >
            <div className="absolute bottom-0 left-0 p-6 w-full ">
              <h3 className="text-orange font-bold pb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardImagesShadow;
