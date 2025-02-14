import "./SliderWithClipPath.scss";

function SliderWithClipPath(props: {
  data: {
    img: string;
    imgTitle: string;
    title: string;
  };
}) {
  return (
    <div className="SliderWithClipPath md:h-[80vh]">
      <div
        className="h-full bg-cover md:flex"
        style={{
          backgroundColor: "orange",
          backgroundImage: `linear-gradient(to top, rgba(229, 40, 27, 0.9), rgba(255, 255, 255, 0.4))`,
        }}
      >
        <div className="basis-auto">
          <img
            alt=""
            title=""
            className="clipPath h-full object-cover md:block"
            src={`/assets/images/slider/${props.data.img}.webp`}
          />
        </div>
        <div className="flex h-full md:translate-x-8 ">
          <p className="m-auto max-w-[600px] md:-translate-x-4 md:-translate-y-8 px-4 py-20  text-xl font-bold leading-loose text-white lg:text-3xl">
            {props.data.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderWithClipPath;
