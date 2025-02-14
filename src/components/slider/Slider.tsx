import {
  faFacebookF,
  faPinterestP,
  faTiktok,
  faVimeoV,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Slider(props: {
  data: { title?: string; desc?: string; img?: string };
  video?: boolean;
  btn?: boolean;
}) {
  const { video = false, btn = false } = props;
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="lg:grid grid-cols-2 h-[75vh] relative">
      <div
        className="flex h-full  bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/images/slider/backgroundFix.webp)`,
        }}
      >
        <div className="m-auto p-10">
          <div className="flex">
            <div className="bg-white my-auto me-2 w-24 h-[2px]"></div>
            <p className="text-white text-2xl">{props.data.title}</p>
          </div>
          <p className="text-white text-[35px] font-bold max-w-96 py-8 ">
            {props.data.desc}
          </p>
          {btn && (
            <button
              className="bg-orange text-xl  text-white px-6 py-3 rounded-md cursor-pointer"
              onClick={() => navigate("/notre-process")}
            >
              Comment ça marche ?
            </button>
          )}
        </div>
      </div>
      {video && (
        <div className="absolute hidden lg:block z-0 left-[48%]  top-[45%]">
          <FontAwesomeIcon
            className="text-white text-[70px] cursor-pointer"
            icon={faCirclePlay}
            onClick={toggleVideo}
          />
        </div>
      )}
      {isPlaying && (
        <div className="z-50 absolute w-full top-[20%] right-[0%]">
          <iframe
            className="m-auto  w-full"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1018684104?h=d4e136ece2"
            width="800"
            height="400"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="lg:flex hidden ">
        <div
          className="lg:basis-11/12  bg-[#0000006b] bg-blend-overlay bg-cover bg-center"
          style={{
            backgroundImage: `url(/assets/images/slider/${props.data.img}.webp)`,
          }}
        ></div>
        <div className="bg-gradient-to-b lg:basis-1/12 flex from-orange to-lightOrange">
          <div className="h-[60%]  m-auto  grid grid-flow-row ">
            <div className="bg-white m-auto h-28 w-[2px]"></div>
            <a
              className="m-auto"
              href="https://www.facebook.com/entreprise.murmur/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className=" text-white text-2xl"
                icon={faFacebookF}
              />
            </a>
            <a
              className="m-auto"
              href="https://twitter.com/MM_Mur_Mur"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faXTwitter}
              />
            </a>
            <a
              className="m-auto"
              href="https://vimeo.com/murmur1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faVimeoV}
              />
            </a>
            <a
              className="m-auto"
              href="http://www.tiktok.com/@entreprise.murmur"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faTiktok}
              />
            </a>
            <a
              className="m-auto"
              href="https://www.pinterest.fr/mur1mur/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faPinterestP}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
