"use client";
import React, { useState } from "react";
function CardFormulaire() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom:"",
    email: "",
    telephone: "",
    secteur: "",
    message: "",
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
      `Merci pour votre message, ${formData.nom} . Nous reviendrons vers vous bientôt.`
    );

    setFormData({
      prenom: "",
      nom:"",
      email: "",
      telephone: "",
      secteur: "",
      message: "",
    });
  };
  return (
    <div>
      <div className="py-10 w-defaultwidth m-auto max-w-mwidth1">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-7">
            <label className="flex flex-col">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Nom <span className="text-[#b26c6c] ">*</span>
              </span>
              <input
                type="text"
                name="nom"
                placeholder="Par exemple : Jean "
                value={formData.nom}
                onChange={handleChange}
                className="bg-[#EDEDED] py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-2"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Prénom <span className="text-[#b26c6c] ">*</span>
              </span>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Par exemple : Jean "
                className="bg-[#EDEDED] py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-2"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Adresse de messagerie{" "}
                <span className="text-[#b26c6c] border-gray ">*</span>
              </span>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Par exemple : jacques@martin.com"
                className="bg-[#EDEDED] py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-2"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Numéro de téléphone <span className="text-[#b26c6c] ">*</span>
              </span>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Par exemple : +1 02 03 04 05"
                className="bg-[#EDEDED] py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-2"
                required
              />
            </label>
          </div>
          <div className="">
            <label className="flex flex-col py-7">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Secteur géographique souhaité
                <span className="text-[#b26c6c] ">*</span>
              </span>
              <input
                type="text"
                name="secteur"
                value={formData.secteur}
                onChange={handleChange}
                placeholder=""
                className="bg-[#EDEDED] py-3 ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-2"
                required
              />
            </label>
            <label className="flex flex-col pb-7">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Comment nous avez-vous connu ?
                <span className="text-[#b26c6c] ">*</span>
              </span>
              <textarea
                name="message"
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                className="bg-[#EDEDED] min-h-[140px]  ps-4 hover:border-[#0693e3] border-[#525252] rounded-md border-2"
                required
              />
            </label>
            <label className="flex ">
              <span className="text-[#737373] pb-3 font-semibold text-[14px]">
                Constent <span className="text-[#b26c6c] ">*</span>
              </span>
            </label>
            <div className="flex">
              <input type="checkbox" className="h-5 w-5 " />
              <p className="ps-3">
                J'ai pris connaissance et j'accepte la politique de
                confidentialité de MUR-MUR.
              </p>
            </div>
            <div className="py-7">
              <button className="bg-orange hover:bg-[#525252] text-white m-auto p-[10px]">
                {" "}
                Envoyer le message
              </button>
            </div>
          </div>
        </form>
        {confirmationMessage && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardFormulaire;
