import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="shadow-2xl ">
      <div className="bg-white">
        <div className="w-defaultwidth m-auto"></div>
      </div>
      <div className="bg-gray">
        <div className="w-defaultwidth m-auto h-16 flex ">
          <div className="ms-auto my-auto pe-10 flex gap-4">
            <button
              className="bg-white text-md m-auto text-orange px-3 hover:bg-[#ffffffa5] shadow-md    py-1 rounded-[4px] cursor-pointer"
              onClick={() => navigate("/offres-demploi")}
            >
              Offres d'emploi
            </button>
            <button
              className="bg-white text-md m-auto text-orange px-3 hover:bg-[#ffffffa5] shadow-md py-1 rounded-[4px] cursor-pointer"
              onClick={() => navigate("/actualites-mur-mur")}
            >
              Actualités
            </button>
            <button
              className="bg-white text-md m-auto text-orange px-3 hover:bg-[#ffffffa5] shadow-md py-1 rounded-[4px] cursor-pointer"
              onClick={() => navigate("/contactez-mur-mur")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
