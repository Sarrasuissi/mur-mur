import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLocation } from "react-router-dom";
import "./Postuler.scss";
import { Helmet } from 'react-helmet';
function Page() {

  const [poste, setPoste] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [local, setLocal] = useState<string | null>(null);


  const location = useLocation();

  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setPoste(queryParams.get("poste"));
    setReference(queryParams.get("reference"));
    setLocal(queryParams.get("local"));
  }, [location]);

  const [state, handleSubmit] = useForm("key");

  if (state.succeeded) {
    return <p>Merci de votre candidature !</p>;
  }

  return (
    <div className="w-defaultwidth m-auto max-w-mwidth2 py-10 formulaire-postuler ">
        <Helmet>
        <title>Formulaire offre de travail - Mur-Mur</title>
        {/* <meta name="description" content={data.metaData.description} /> */}
        <link rel="canonical" href="https://mur-mur.fr/temoignages-de-nos-collaborateurs/formulaire-offre-de-travail/" />
        <meta property="og:title" content="Formulaire offre de travail - Mur-Mur" />
        {/* <meta property="og:description" content={data.metaData.description} /> */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mur-mur.fr/temoignages-de-nos-collaborateurs/formulaire-offre-de-travail/" />
      </Helmet>
      <form onSubmit={handleSubmit} className="mt-6 ">
       
        {poste && <div>Poste: {poste}</div>}
        {reference && <div>Référence: {reference}</div>}
        {local && <div>Local: {local}</div>}

        <div className="mt-4">
          <label htmlFor="email" className="block font-bold ">
            Email <span className="text-red-900 ">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-control "
            placeholder="contact@mur-mur.fr"
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>

        <div className="mb-3 lg:flex lg:flex-row lg:space-x-6">
          <div className="lg:basis-1/2 basis-full">
            <label htmlFor="nom" className="block font-bold ">
              Nom <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="Nom"
              placeholder="Par exemple : Jean"
              required
            />
          </div>
          <div className="lg:basis-1/2 basis-full">
            <label htmlFor="phone" className="block font-bold ">
              Téléphone <span>*</span>
            </label>
            <input
              type="tel"
              className="form-control  "
              name="telephone"
              id="phone"
              placeholder="Par exemple : +33"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="rue" className="block font-bold">
            Rue <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="rue"
            name="Rue"
            required
            className="form-control"
            placeholder="15 rue des Halles, 75001"
          />
          <ValidationError field="Rue" prefix="Rue" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="ville" className="block font-bold">
            Ville <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="ville"
            name="Ville"
            required
            className="form-control"
            placeholder="Paris"
          />
          <ValidationError field="Ville" prefix="Ville" errors={state.errors} />
        </div>

        <div className="mb-3 lg:flex lg:flex-row lg:space-x-6">
          <div className="lg:basis-1/2 basis-full">
            <label htmlFor="codePostal" className="block font-bold">
              Code Postal <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="codePostal"
              name="codePostal"
              placeholder="75001"
              required
            />
          </div>
          <div className="lg:basis-1/2 basis-full">
            <label htmlFor="pays" className="block font-bold">
              Pays <span>*</span>
            </label>

            <input
              type="text"
              className="form-control"
              name="pays"
              id="pays"
              placeholder="France"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="block font-bold">
            Lettre de Motivation <span className="text-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="form-control"
            placeholder="Décrivez-vous pour rejoindre notre entreprise !"
          ></textarea>
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />
        </div>
        <div className="pt-4">
          <label>CV (PDF) :</label>
        </div>
        <div className="inputFile pb-4">
          <label
            className=" file-label mt-6 bg-orange text-white py-3 px-6"
            htmlFor="fileInput"
          >
            Choisir un fichier
          </label>
          <input type="file" id="fileInput" />
        </div>
        <div className="flex my-2 mx-1">
          <div>
            <input
              className="form-check-input me-5"
              type="checkbox"
              value="politique"
              name="Politique de confidentialité"
              id="politique"
              required
            />
          </div>

          <div>
            <label
              className="form-check-label mx-3 0 ms-2 font-light"
              htmlFor="flexCheckDefault"
            >
              J'ai pris connaissance et j'accepte la politique de
              confidentialité de mur-mur
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6  text-white  bg-orange py-2 px-10   "
          disabled={state.submitting}
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}

export default Page;
