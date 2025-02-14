"use client";

function CardHoverIcon(props: {
  data: {
    icon?: string;
    iconHover?: string;
    title?: string;
    desc?: string;
  }[];
  hover?: boolean;
  number?: boolean;
  grid?: boolean;
}) {
  const { hover = false, number = false, grid = false } = props;
  return (
    <div className="w-defaultwidth max-w-mwidth1 m-auto">
      <div
        className={`grid gap-14 m-auto  ${
          grid
            ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
            : "xl:grid-cols-3 md:grid-cols-2"
        }`}
      >
        {props.data.map((item, index) => (
          <div
            className={`  ${
              hover ? "hover:bg-orange group" : ""
            } bg-[#F8F6F6] shadow-2xl lg:min-h-[500px] lg:py-10 lg:px-10 py-7 px-5`}
            key={index}
            onMouseEnter={(e) => {
              const imgElement = e.currentTarget.querySelector("img");
              if (imgElement) {
                imgElement.src = `/assets/icons/${item.iconHover}`;
              }
            }}
            onMouseLeave={(e) => {
              const imgElement = e.currentTarget.querySelector("img");
              if (imgElement) {
                imgElement.src = `/assets/icons/${item.icon}`;
              }
            }}
          >
            {number && (
              <div className="font-bold m-auto -translate-y-20 bg-orange border-white border-4 flex rounded-full w-20 h-20 shadow">
                <p className="m-auto text-[40px] text-white">{index + 1}</p>
              </div>
            )}

            <div className="md:pb-2">
              <img
                className={`m-auto  ${
                  hover
                    ? "group-hover:bg-white rounded-full bg-transparent"
                    : "bg-transparent"
                }  `}
                src={`/assets/icons/${item.icon}`}
                alt={item.title}
              />
            </div>
            <h2
              className={`text-center lg:min-h-28 lg:py-0 py-7 flex justify-center items-baseline m-auto text-orange ${
                hover ? "group-hover:text-white" : ""
              } `}
            >
              {item.title}
            </h2>
            <p
              className={`text-[18px] m-auto  ${
                hover ? "group-hover:text-white" : ""
              }`}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardHoverIcon;
