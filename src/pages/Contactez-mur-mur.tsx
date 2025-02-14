"use client";
import {
  faFacebookF,
  faPinterestP,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Helmet } from 'react-helmet';
function Page() {
   const [formData, setFormData] = useState({
    nom:"",
      prenom: "",
      email: "",
      sujet: "",
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
        `Merci pour votre message, ${formData.prenom} . Nous reviendrons vers vous bientôt.`
      );
  
      setFormData({
        nom:"",
        prenom: "",
        email: "",
        sujet: "",
        message: "",
      });
    };
  return (
    <div>
        <Helmet>
        <title>Contactez MUR-MUR IDF -Entreprise murs porteurs réactivité et expertise</title>
        <meta name="description" content="Contactez MUR-MUR IDF : En cas de besoin de nos prestations ou pour une question ou demande, veillez remplir le formulaire ou nous appeler par téléphone." />
        <link rel="canonical" href="https://mur-mur.fr/contactez-mur-mur/" />
        <meta property="og:title" content="Contactez MUR-MUR IDF : En cas de besoin de nos prestations ou pour une question ou demande, veillez remplir le formulaire ou nous appeler par téléphone." />
        <meta property="og:description" content="Contactez MUR-MUR IDF : En cas de besoin de nos prestations ou pour une question ou demande, veillez remplir le formulaire ou nous appeler par téléphone." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mur-mur.fr/contactez-mur-mur/" />
      </Helmet>
      <div className="my-20 bg-white shadow-2xl rounded-xl w-defaultwidth max-w-mediumwidth m-auto">
        <div className=" p-10">
          <h1 className="text-orange text-center p-7 md:text-[32px] lg:font-[800] font-bold"> Contactez-Nous</h1>
          <div className="grid lg:grid-cols-2  gap-5">
          <div className="flex ">
          <form className=" m-auto w-full" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
            <div className="mb-4">
              <label className="text-sm font-bold" htmlFor="nom">
        
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="VOTRE NOM ..."
                className="w-full px-3 py-2 rounded-md focus:outline-double outline-orange focus:ring-orange bg-[#EDEDED]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-bold" htmlFor="name">
      
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                  placeholder="VOTRE PRENOM ..."
                className="w-full px-3 py-2 rounded-md focus:outline-double outline-orange focus:ring-orange bg-[#EDEDED]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-bold" htmlFor="sujet">
         
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                placeholder="LE SUJET ..."
                className="w-full px-3 py-2 rounded-md focus:outline-double outline-orange focus:ring-orange bg-[#EDEDED]"
                required
              />
            </div>
        
            <div className="mb-4">
              <label className="text-sm font-bold" htmlFor="email">
           
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="VOTRE EMAIl ..."
                className="w-full px-3 py-2 rounded-md focus:outline-double outline-orange focus:ring-orange bg-[#EDEDED]"
                required
              />
            </div>
            </div>
            <div className="my-4 w-full">
              <label className="text-sm font-bold" htmlFor="message">
           
              </label>
              <textarea
             
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="VOTRE MESSAGE ICI ..."
                className="w-full px-3 py-10 rounded-md focus:outline-double outline-orange focus:ring-orange bg-[#EDEDED]"
                required
              />
            </div>
            <div className="py-7 w-full  flex">
              <button className="bg-orange hover:border-orange border-2 hover:bg-transparent rounded-md text-white hover:text-orange px-3  m-auto py-4">
                Envoyer le message
              </button>
            </div>
            {confirmationMessage && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            {confirmationMessage}
          </div>
        )}
          </form>
   
          </div>
          <div className="relative w-full">
          <img className="w-full min-h-[300px] object-cover object-top" src="/assets/images/contact/contact-mm.webp" alt="contactez-nous" title="contactez-nous" />
          <div className="absolute md:p-7 bg-[#eaeaea] m-auto min-h-[200px] md:w-20 w-16 -top-16  -right-10  rounded-lg flex flex-col">
              <a
              className="m-auto"
              href="https://www.facebook.com/entreprise.murmur/"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon
                className=" text-black hover:text-red-600  text-2xl"
                icon={faFacebookF}
              />
            </a>
            <a
              className="m-auto"
              href="https://twitter.com/MM_Mur_Mur"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-black hover:text-red-600  text-2xl"
                icon={faXTwitter}
              />
            </a>    <a
              className="m-auto"
              href="https://www.pinterest.fr/mur1mur/"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-black hover:text-red-600 text-2xl"
                icon={faPinterestP}
              />
            </a>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
