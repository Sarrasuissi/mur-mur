import "./CardFleche.scss";

function CardFleche(props: {
  data: {
    title?: string;
    desc?: string;
  }[];
}) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 CardFleche  gap-4">
      {props.data.map((item, index) => (
        <div key={index}>
          <div className=" grid grid-cols-8 h-full  gap-2">
            <div
              className={`${
                index === 3 ? "" : "xl:clipPath1 xl:bg-none bg-gradient-to-tr xl:from-transparent from-gray/40 xl:via-transparent via-white"
              } bg-white flex min-h-[510px]  max-w-[400px] col-span-7 `}
            >
              <div className={`${index === 3 ? " max-w-72" : "2xl:max-w-40 max-w-60"} p-4 pe-0`}>
                <h3 className="pb-4 text-orange font-bold text-[18px] max-w-[30px]">{item.title}</h3>
                <p className="w-fit">{item.desc}</p>
              </div>
            </div>
            <div
              className={`${
                index === 3 ? "hidden" : "clipPath2 xl:block hidden"
              } bg-orange  2xl:-translate-x-[300px] lg:-translate-x-[140px] 
               -translate-x-[200px] 2xl:w-[350px] w-[200px]  col-span-1`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardFleche;
