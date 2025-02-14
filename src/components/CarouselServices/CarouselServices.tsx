import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselServices.scss";

function CarouselServices(props: {
  data: { title: string; desc: string; img: string }[];
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="m-auto w-defaultwidth  max-w-mediumwidth">
      <Slider {...settings}>
        {props.data?.map((item, index) => (
          <div className=" flex px-4">
            <div className="max-w-[600px] m-auto" key={index}>
              <div className={` `}>
                <img src={`assets/images/${item.img}.webp`} alt={item.title} title={item.title}/>
                <div className="bg-orange flex  p-6  ">
                  <h3 className="m-auto text-center text-white xl:text-[22px] text-md">
                    {item?.title}
                  </h3>
                </div>
                <p className="pt-10">{item?.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselServices;
