"use client";
import React, { useState } from "react";
function CardFormeBlog() {
      const [formData, setFormData] = useState({
        nom: "",
        email: "",
        commentaire: "",
        siteWeb: "",
       
      });
      const [confirmationMessage, setConfirmationMessage] = useState("");
      
        const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setConfirmationMessage("Merci pour votre commentaire!");
      
        setFormData({  
            nom: "",
            email: "",
            commentaire: "",
            siteWeb: "",
           })
  };
  return (
    <div className=" ">
        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col ">

            <textarea
                name="commentaire"
                placeholder="Commentaire *"
                value={formData.commentaire}
                onChange={handleChange}
                className="bg-[#EDEDED] min-h-[140px] pt-7 text-[18px] ps-4  w-full mb-4"
                required
              />
              <div className="grid lg:grid-cols-2  ">
                <div className="lg:col-span-1 flex flex-col gap-4 w-full">
            <input
                type="text"
                name="nom"
                placeholder="Nom *"
                value={formData.nom}
                onChange={handleChange}
                className="bg-[#EDEDED] py-3 ps-4  text-[18px]"
                required
              />
               <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail *"
                className="bg-[#EDEDED] py-3 ps-4  text-[18px]"
                required
              />
                   <input
                type="text"
                name="siteWeb"
                value={formData.siteWeb}
                onChange={handleChange}
                placeholder="Site web"
                className="bg-[#EDEDED] py-3 ps-4  text-[18px]"
                required
              />
              </div>
              </div>
              <div className="">
               <div className="flex mt-5">
              <input type="checkbox" className="h-5 w-5 " />
              <p className="ps-3">
              Enregistrer mon nom, mon e-mail et mon site dans le navigateur pour mon prochain commentaire.
              </p>
            </div>
            <div className="py-7 flex">
              <button className=" border-orange hover:border-transparent border-2 hover:bg-[#EDEDED] text-orange ms-auto p-[16px] duration-150 text-[18px]  font-bold">
                {" "}
               Poster le commentaire
              </button>
            </div>
            </div>
            </div>
        </form>
        {confirmationMessage && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            {confirmationMessage}
          </div>
        )}
    </div>
  )
}

export default CardFormeBlog