function Footer() {
  return (
    <div className="md:grid grid-cols-5 ">
      <div className="lg:col-span-3 col-span-2 grid xl:grid-cols-3  py-10 bg-lightGray">
        <div className="w-full flex xl:col-span-1 col-span-2">
          <img alt="logo" className="m-auto " src="/assets/icons/logo.webp" />
        </div>
        <div className="lg:mx-auto lg:ps-0 ps-10 py-2  lg:col-span-1 col-span-2 grid grid-flow-row xl:gap-3 font-bold">
          <a href="/contactez-mur-mur">Contact</a>
          <a href="/realisation-etude-mur-porteur">Réalisations</a>
          <a href="/actualites-mur-mur">Blog</a>
          <a href="/nos-implantations/ile-de-france/ouverture-de-mur-porteur-a-paris">Nos agences</a>
          <a href="/qui-sommes-nous/entreprise-mur-porteur">A propos de nous</a>
          <a href="/">Quiz</a>
        </div>
        <div className="lg:mx-auto lg:ps-0 ps-10 py-2 lg:col-span-1 col-span-2 grid grid-flow-row xl:gap-3 font-bold ">
          <p className="font-bold text-[25px]">Nos solutions</p>
          <a href="/nos-solutions/creation-douverture-dans-la-charpente-en-france">Ouverture de trémie</a>
          <a href="/nos-solutions/suivi-travaux-mur-porteur">Suivi des travaux</a>
          <a href="/nos-solutions/coaching-travaux-mur-porteur">Coaching travaux</a>
          <a href="/nos-solutions/renovation-et-construction-de-murrenforcement-des-murs-porteurs">Renforcement des murs</a>
        </div>
      </div>
      <div className="bg-orange 2xl:px-6 px-10 lg:col-span-2 col-span-3 grid 2xl:grid-cols-3">
        <div className="col-span-1 py-10 grid grid-flow-row text-white gap-3 font-bold ">
          <p className="font-bold text-[25px]">Nos expertises</p>
          <a href="/nos-expertises/etude-mur-porteur">Etude mur porteur</a>
          <a href="/nos-expertises/etude-renforcement-plancher"> Etude de plancher</a>
          <a href="/nos-expertises/assistance-administrative">Assistance administrative</a>
          <a href="/nos-expertises/etude-de-faisabilite">Etude de faisabilité</a>
          <a href="/nos-expertises/etude-et-renforcement">Etude et renforcement</a>
          <a href="/nos-expertises/execution-et-gestion-des-travaux"> Exécution et gestion des travaux</a>
        </div>
        <div className="flex  col-span-2 items-center 2xl:ms-auto">
          <div className="">
            <p className="text-[14px] py-1 font-semibold">
              Email <span className="text-white">*</span>
            </p>
            <div className="py-4 flex items-center  overflow-hidden">
              <input
                type="text"
                placeholder="Contact@mur-mur.fr"
                className="flex-grow px-4 py-2 outline-none"
              />
              <button type="button" className="bg-black text-white px-4 py-2">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
