import "./CardFleche.scss";

function CardFleche(props: {
  data: {
    title?: string;
    desc?: string;
  }[];
}) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 CardFleche  gap-4">
      {props.data.map((item, index) => (
        <div key={index}>
          <div className=" grid grid-cols-8 h-full  gap-2">
            <div
              className={`${
                index === 3 ? "" : "clipPath1"
              } bg-white flex min-h-[510px]  max-w-[400px] col-span-7 `}
            >
              <div className={`${index === 3 ? " max-w-72" : "2xl:max-w-40 md:max-w-36 max-w-60"} p-4 pe-0`}>
                <h3 className="pb-4 text-orange font-bold text-[18px] max-w-[30px]">{item.title}</h3>
                <p className="w-fit">{item.desc}</p>
              </div>
            </div>
            <div
              className={`${
                index === 3 ? "hidden" : "clipPath2 md:block hidden"
              } bg-orange  2xl:-translate-x-[310px] lg:-translate-x-[150px] 
               -translate-x-[250px] 2xl:w-[350px] w-[200px]  col-span-1`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardFleche;
