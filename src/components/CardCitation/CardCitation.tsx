import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CardCitation.scss";
function CardCitation() {
  return (
    <div className="w-defaultwidth shadow-md max-w-mwidth1 m-auto bg-[#F5F5F5] md:p-7 p-5 lg:flex flex-col">
      <div className="h-10 flex  text-[22px] md:-translate-y-12 -translate-y-10 text-orange border-[3px] rounded-full w-10   m-auto">
        <FontAwesomeIcon icon={faQuoteRight} className="m-auto" />
      </div>
      <div className="lg:flex lg:flex-row lg:m-0 m-auto ">
        <div className="lg:basis-2/12 2xl:basis-1/12 ">
          {" "}
          <img
            className="rounded-full h-24 w-24 object-cover   lg:m-0 m-auto"
            src="/assets/images/home/ken-follett.webp"
            alt="ken-follett"
          />
        </div>
        <div className="lg:basis-11/12 flex">
          <p className="text-center text-[20px] py-3  mx-auto">
            Ce qui coûte le plus cher dans une construction ce sont les erreurs
            .
          </p>
        </div>{" "}
      </div>{" "}
      <div className="flex justify-end  text-[18px]">
        <p className=" " style={{ fontFamily: "Segoe Script" }}>
          Ken Follett
        </p>
      </div>
    </div>
  );
}

export default CardCitation;
