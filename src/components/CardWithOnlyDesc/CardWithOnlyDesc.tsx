

function CardWithOnlyDesc(props:{
    data:{
    title?:string;
    desc?:string;
    list?:{subTitle?:string,subDesc?:string}[];
    };
}) {
  return (
    <div className="flex shadow-lg ">
      <div className="flex">
        <div className=" basis-1/12 flex ">
          <div className="bg-orange md:w-14 w-5 h-full col-span-1 "></div>
        </div>
      </div>
      <div className="col-span-11 basis-11/12   flex">
        <div className=" w-defaultwidth  m-auto py-16  bg-white">
          {props?.data.title && (
            <h2 className="text-[28px] py-5 font-semibold text-orange">
              {props.data.title}
            </h2>
          )}
          {props?.data.list?.map((item, index) => (
            <div key={index} className="md:mx-0 mx-2">
              <ul className="list-disc py-4">
                <li>
                  {item?.subTitle && (
                    <span className="font-semibold text-[18px]">
                      {item?.subTitle}
                    </span>
                  )}
                  {item.subDesc && (
                    <span className="font-normal text-[18px]">
                      {item?.subDesc}
                    </span>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardWithOnlyDesc;