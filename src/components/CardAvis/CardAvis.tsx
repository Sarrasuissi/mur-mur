import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import "./CardAvis.scss";
import { useState } from "react";
function CardAvis(props: {
  data: {
    title?: string;
    desc?: string;
    descPlus?: string;
    name?: string;
  }[];
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  const [seeMore, setSeeMore] = useState(Array(props.data.length).fill(false));
  return (
    <div className="m-auto w-defaultwidth  max-w-mediumwidth">
      <Slider {...settings}>
        {props.data.map((item, index) => (
          <div
            key={index}
            className="border-2  lg:min-h-[300px] h-full border-[#ccc] w-full m-auto p-7"
          >
            <h4 className="font-semibold pb-7 text-[20px]">{item.title}</h4>
            <div className="flex gap-7 m-auto ">
              <div className="flex flex-row">
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star"  />
                <img src="/assets/icons/star.png" alt="star" />
              </div>
              <div className="">
                <p>1 year ago</p>
              </div>
            </div>
            <div className=" pt-10">
              <p className="">
                {item.desc}
                {seeMore[index] && (
                  <span className="">
                    <span>{item.descPlus}</span>
                  </span>
                )}
              </p>
              <div className="flex w-full pt-3 ">
                <button
                  onClick={() => {
                    setSeeMore((prev) => {
                      const state = Array(props.data.length).fill(false);
                      state[index] = !prev[index];
                      return state;
                    });
                  }}
                  className="cursor-pointer  ms-auto text-orange  px-4   "
                >
                  {seeMore[index] ? "Afficher moins" : "Afficher plus"}
                </button>
              </div>
            </div>
            <p className="my-auto font-semibold">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardAvis;
