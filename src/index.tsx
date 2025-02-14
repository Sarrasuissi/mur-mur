import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import AproposDeNous from "./pages/qui-sommes-nous/A-propos-de-nous";
import DevenirCollaborateur from "./pages/rejoignez-nous/Devenir-collaborateur";
import EtudeMurPorteur from "./pages/nos-expertises/Etude-mur-porteur";
import DevenirFranchise from "./pages/rejoignez-nous/Devenir-franchise";
import TemoignagesDeNosCollaborateurs from "./pages/rejoignez-nous/temoignages/Temoignages-de-nos-collaborateurs";
import TemoignagesDeNosFranchises from "./pages/rejoignez-nous/temoignages/Temoignages-de-nos-franchises";
import EtudeRenforcementPlancher from "./pages/nos-expertises/Etude-renforcement-plancher";
import AssistanceAdministrative from "./pages/nos-expertises/Assistance-administrative";
import EtudeDeFaisabilite from "./pages/nos-expertises/Etude-de-faisabilite";
import EtudeEtRenforcement from "./pages/nos-expertises/Etude-et-renforcement";
import ExecutionEtGestionDesTravaux from "./pages/nos-expertises/Execution-et-gestion-des-travaux";
import SuiviTravauxMurPorteur from "./pages/nos-solutions/Suivi-travaux-mur-porteur";
import DemolitionEtReconstruction from "./pages/nos-solutions/Demolition-et-reconstruction-de-murs-porteurs";
import ModificationDesMursPorteurs from "./pages/nos-solutions/Modification-des-murs-porteurs";
import CoachingTravauxMurPorteur from "./pages/nos-solutions/Coaching-travaux-mur-porteur";
import CreationDouverture from "./pages/nos-solutions/Creation-douverture-dans-la-charpente-en-france";
import RenovationEtConstruction from "./pages/nos-solutions/Renovation-et-construction-de-murrenforcement-des-murs-porteurs";
import OuvertureDeTremie from "./pages/nos-solutions/Ouverture-de-tremie";
import NotreProcess from "./pages/Notre-process";
import Realisation from "./pages/Realisations";
import OffresDemploi from "./pages/offres-demploi/Offres-demploi";
import PagesRealisations from "./pages/PagesRealisations";
import Actualitee from "./pages/actualites-mur-mur/[...slug]/Page";
import Actualites from "./pages/actualites-mur-mur/Actualites-mur-mur";

import Contactez from "./pages/Contactez-mur-mur";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Postuler from "./pages/offres-demploi/postuler/Postuler";
import Header from "./components/Header/Header";
import NosImplantationsPage from "./pages/nos-implantations/nos-implantations";
import Reviews from "./pages/Reviews";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <div className="z-[1111111111111] sticky top-0">
        <Header />
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Qui sommes nous */}
        <Route
          path="/qui-sommes-nous/entreprise-mur-porteur"
          element={<AproposDeNous />}
        />
        {/* Rejoignez nous */}
        <Route
          path="/rejoignez-nous/devenir-collaborateur"
          element={<DevenirCollaborateur />}
        />
        <Route
          path="rejoignez-nous/devenir-franchise"
          element={<DevenirFranchise />}
        />
        <Route
          path="/rejoignez-nous/temoignages/temoignages-de-nos-collaborateurs"
          element={<TemoignagesDeNosCollaborateurs />}
        />
        <Route
          path="/rejoignez-nous/temoignages/temoignages-franchise"
          element={<TemoignagesDeNosFranchises />}
        />
        {/* Nos expertises */}
        <Route
          path="nos-expertises/etude-mur-porteur"
          element={<EtudeMurPorteur />}
        />
        <Route
          path="nos-expertises/etude-renforcement-plancher"
          element={<EtudeRenforcementPlancher />}
        />
        <Route
          path="/nos-expertises/assistance-administrative"
          element={<AssistanceAdministrative />}
        />
        <Route
          path="nos-expertises/etude-de-faisabilite"
          element={<EtudeDeFaisabilite />}
        />
        <Route
          path="/nos-expertises/etude-et-renforcement"
          element={<EtudeEtRenforcement />}
        />
        <Route
          path="/nos-expertises/execution-et-gestion-des-travaux"
          element={<ExecutionEtGestionDesTravaux />}
        />
        {/* Nos solutions */}
        <Route
          path="/nos-solutions/suivi-travaux-mur-porteur"
          element={<SuiviTravauxMurPorteur />}
        />
        <Route
          path="/nos-solutions/demolition-et-reconstruction-de-murs-porteurs"
          element={<DemolitionEtReconstruction />}
        />
        <Route
          path="/nos-solutions/modification-des-murs-porteurs"
          element={<ModificationDesMursPorteurs />}
        />
        <Route
          path="/nos-solutions/coaching-travaux-mur-porteur"
          element={<CoachingTravauxMurPorteur />}
        />
        <Route
          path="/nos-solutions/creation-douverture-dans-la-charpente-en-france"
          element={<CreationDouverture />}
        />
        <Route
          path="/nos-solutions/renovation-et-construction-de-murrenforcement-des-murs-porteurs"
          element={<RenovationEtConstruction />}
        />
        <Route
          path="/nos-solutions/ouverture-de-tremie"
          element={<OuvertureDeTremie />}
        />
        {/* Notre process */}
        <Route path="/notre-process" element={<NotreProcess />} />
        {/* Nos implantations */}
        <Route
          path="/nos-implantations/:region/:slug"
          element={<NosImplantationsPage />}
        />
        {/* Réalisations */}
        <Route
          path="/realisation-etude-mur-porteur"
          element={<Realisation />}
        />
        <Route
          path="/:categoryRealisation/:slugPageRealisation"
          element={<PagesRealisations />}
        />
        {/* Offres d'emploi */}
        <Route path="/offres-demploi" element={<OffresDemploi />} />
        <Route path="/postuler" element={<Postuler />} />
        {/* Actualités */}
        <Route path="/actualites-mur-mur" element={<Actualites />} />
       
        <Route
          path="actualites-mur-mur/:slugCategory/:slugPage"
          element={<Actualitee />}
        />
        {/* Contact */}
        <Route path="/contactez-mur-mur" element={<Contactez />} />
          <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
      <div className="grid bg-black grid-cols-3 px-10 text-white">
        <p>Copyright</p>
        <p className="m-auto">protection des données personnelles</p>
        <p className="ms-auto">mentions légales</p>
      </div>
    </Router>
  </React.StrictMode>
);
