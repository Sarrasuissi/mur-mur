function cardContact(props: {
  data: {
    title?: string;
    desc?: string;
  };
}) {
  return (
    <div className=" bg-[#F8F6F6] shadow-xl text-center  m-auto px-3 ">
      <div>
        {" "}
        {props?.data?.title && (
          <h3 className=" py-10 text-orange font-bold text-[24px]">
            {props?.data.title}
          </h3>
        )}
        {props?.data?.desc && (
          <p className="text-[18px] pb-12 leading-relaxed">
            {" "}
            {props?.data.desc}
          </p>
        )}
      </div>
      <div className="  pb-10">
        <a href="/Contactez-mur-mur">
          <button className="duration-150 border-2 border-orange  hover:bg-lightGray group-hover:border-transparent  relative w-[170px] hover:w-[200px] rounded-sm p-3 ">
            <p className="text-[#FF4C2E] text-[20px]  font-meduim ">
              Contacter-nous
            </p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default cardContact;
