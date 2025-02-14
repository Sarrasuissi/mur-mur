"use client";
import { useForm } from "@formspree/react";
import "./formulaire.scss";
function Formulaire(props: {
  keyForm: string;

}) {
  const [state, handleSubmit] = useForm(props?.keyForm);
  if (state.succeeded) {
    return <p>Merci de vous être joint(e) !</p>;
  }
  return (
    <form
      className={`formulaire-devenir m-auto my-20 block max-w-mwidth2 bg-[#F5F5F5] p-10`}
      onSubmit={handleSubmit}
    >
   

      <div className="mb-3 block lg:flex lg:flex-row lg:space-x-6">
        <div className="basis-full lg:basis-1/2">
          <label htmlFor="prenom" className="form-label block">
            Nom <span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name="Nom"
            placeholder="Nom"
            required
          />
        </div>
        <div className="basis-full lg:basis-1/2">
          <label htmlFor="prenom" className="form-label block">
            Prénom <span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            name="Prénom"
            placeholder="Prénom"
            required
          />
        </div>
      </div>
      <div className="mb-3 block lg:flex lg:flex-row lg:space-x-6">
        <div className="basis-full lg:basis-1/2">
          <label htmlFor="email" className="form-label block">
            Adresse de messagerie <span>*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="jacques@martin.com"
            required
          />
        </div>
        <div className="basis-full lg:basis-1/2">
          <label htmlFor="phone" className="form-label block">
            Numéro de téléphone <span>*</span>
          </label>
          <input
            type="number"
            className="form-control"
            name="Télephone"
            id="phone"
            placeholder="+1 02 03 04 05"
            required
          />
        </div>
      </div>
      <div className="mx-1 mb-3">
        <label htmlFor="zone" id="zone" className="form-label block">
          Secteur géographique souhaité <span>*</span>
        </label>
        <select
          name="Secteur géographique"
          defaultValue="Le Havre"
          className="form-select"
          aria-label="Default select example"
          required
        >
          <option className="opt" value="Le Havre">
            Le Havre
          </option>
          <option value="Annecy">Annecy</option>
          <option value="Nice">Nice</option>
          <option value="Biarritz">Biarritz</option>
          <option value="Cergy">Cergy</option>
          <option value="Nantes">Nantes</option>
          <option value="Strasbourg">Strasbourg</option>
          <option value="Rennes">Rennes</option>
          <option value="Saint-Denis">Saint-Denis</option>
          <option value="Grenoble">Grenoble</option>
          <option value="Marseille">Marseille</option>
          <option value="Montpellier">Montpellier</option>
          <option value="Reims">Reims</option>
          <option value="Bordeaux">Bordeaux</option>
          <option value="Lyon">Lyon</option>
          <option value="Toulouse">Toulouse</option>
          <option value="Lille">Lille</option>
          <option value="Clichy">Clichy</option>
          <option value="Paris">Paris</option>
          <option value="Toulon">Toulon</option>
        </select>
      </div>
      <div className="mx-1 mb-4">
        <label htmlFor="connu" id="connu" className="form-label block">
          Comment nous avez-vous connu ? <span>*</span>
        </label>

        <select
          name="Comment nous avez-vous connu ?"
          defaultValue="Sites de franchises"
          className="form-select"
          aria-label="Default select example"
          required
        >
          <option value="Sites de franchises">Sites de franchises</option>
          <option value="Recommandation">Recommandation</option>
          <option value="Salon">Salon</option>
          <option value="Presse">Presse</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      <div className="mx-1 flex flex-wrap">
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
            className="form-check-label mx-3 ms-2"
            htmlFor="flexCheckDefault"
          >
            J&apos;ai pris connaissance et j&apos;accepte la{" "}
            <a className="text-red-500 " href="/"> politique de confidentialité</a> de Mur-Mur.
          </label>
        </div>
      </div>
      <button
        className="formulaire-devenir-button d-block my-3 mt-10 px-3 py-2"
        type="submit"
        disabled={state.submitting}
      >
        Envoyer le message
      </button>
    </form>
  );
}

export default Formulaire;
