import React from "react";
import { Link } from "react-router-dom";

function ImgSidebar() {
  return (
    <div className=" ms-0 border-[0.1px] border-gray/60  flex  px-2 py-5 gap-3">
      <div className="lg:basis-3/12">
        <Link to="https://www.facebook.com/entreprise.murmur">
          <img
            className="h-20 w-20 my-auto lg:mr-0 mr-7 object-cover"
            src="/assets/icons/logo.webp"
            alt="Mur-Mur"
          />
        </Link>
      </div>
      <div className="basis-9/12">
        <Link to="https://www.facebook.com/entreprise.murmur">
          <h3 className="font-bold pb-2 text-[19px] text-black">
            Entreprise MurMur
          </h3>
        </Link>
        <p className="text-[15px] text-[#666]">
          Spécialistes en ouverture de mur porteur pour transformer vos espaces.
        </p>
        <p className="font-bold text-[13px] text-[#666]">1 people like this</p>
      </div>
    </div>
  );
}

export default ImgSidebar;
