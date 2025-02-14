"use client";
import React, { useState } from "react";
import "./FormReviews.scss"
function FormReviews() {
    const [formData, setFormData] = useState({
        nom:"",
          email: "",
          avis: "",
          titre: "",
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
              
                  setConfirmationMessage(
                    `Merci pour votre Avis, ${formData.nom} .`
                  );
              
                  setFormData({
                    nom:"",
                    email: "",
                    avis: "",
                    titre: "",
                  });
                };
  return (
    <div className="w-full ">
        
        <h1 className="text-orange font-semibold pb-5"> Parlez-nous de votre expérience </h1>
        
        {/* <div className=""></div> */}
        <div className="  pb-5">
            <form onSubmit={handleSubmit}>
            <p className="font-semibold">Votre note globale</p>
            <div className="rating">
              <input type="radio" id="star5" name="rating" value="5" required/>
            <label htmlFor="star5" ></label>
            <input type="radio" id="star4" name="rating" value="4" required/>
            <label htmlFor="star4"></label>
            <input type="radio" id="star3" name="rating" value="3" required/>
            <label htmlFor="star3"></label>
            <input type="radio" id="star2" name="rating" value="2" required />
            <label htmlFor="star2"></label>
            <input type="radio" id="star1" name="rating" value="1" required/>
            <label htmlFor="star1"></label>
              </div>
                <div className="flex flex-col w-full mb-2">
            <label className=" mb-2 font-semibold">Titre de votre avis</label>
                <input
                  type="text"
                  name="titre"
                  value={formData.titre}
                  placeholder="Résumez votre avis ou mettez en évidence un détail intéressant"
                  onChange={handleChange}
                  className=" py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-[1px] w-full"
                  required
                /></div>
                <div className="flex flex-col mb-2">
                <label className="pt-3 mb-2 font-semibold">Votre avis</label>
                <textarea
                  name="avis"
                  value={formData.avis}
                  placeholder="Donnez votre avis"
                  onChange={handleChange}
                  className=" py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-[1px]"
                  required
                ></textarea>
                </div>
                <div className="flex flex-col mb-2">
                <label className="pt-3 mb-2 font-semibold">Votre nom</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Donnez votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className=" py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-[1px]"
                  required
                />
                </div>
                <div className="flex flex-col mb-2">
                <label className="pt-3 mb-2 font-semibold">Votre e-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Donnez votre e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className=" py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-[1px]"
                  required
                />
             </div>
             <div className="flex flex-nowrap mt-7">
                    <div className="checkbox-apple">
                <input className="yep" id="check-apple" type="checkbox" required />
                <label htmlFor="check-apple" />
              </div>
              <div className="my-auto sm:ml-5 ml-7">
                <label className="md:text-[18px]">
                Cette note est fondée sur ma propre expérience et mon véritable avis.
                </label>
              </div>
              </div>
                <div className="flex py-7">
                <button className="px-5 text-[18px] my-auto py-4 bg-[#404040] hover:bg-orange   text-white" type="submit">Submit Review</button>
                </div>
            </form>
            {confirmationMessage && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            {confirmationMessage}
          </div>
        )}
        </div>
    </div>
  )
}

export default FormReviews