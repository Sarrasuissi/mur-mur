import React from 'react'
import { useState } from "react";
function AllBlogs(props: {
    data: {
        title?: string;
        desc?: string;
        descPlus?: string;
        name?: string;
      }[];
}) {
    const [seeMore, setSeeMore] = useState(Array(props.data.length).fill(false));
  return (
    <div className='lg:mt-10'>
          <div className="">
            <div className="flex gap-3 m-auto ">
            <p className='font-bold text-[24px] my-auto'>5,0</p>
            <div className="flex flex-row h-7 my-auto">
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
              </div>
              </div>
              <div className="py-3">
                <p className='text-[17px]'>5,0 étoiles sur 5 (selon 19 avis)</p>
              </div>
        </div>
        <div className="flex mb-4 lg:max-w-[400px]  w-full max-w-widthCard350">
        <div className="  grid gap-1 me-auto ">
          <span className='my-auto '>Excellent</span> 
          <span className='my-auto '>Très bon</span> 
          <span className='my-auto '>Moyen</span> 
          <span className='my-auto '>Passable</span> 
          <span className='my-auto '>Décevant</span>  
       </div>
        <div className=" grid gap-1 xl:ml-0 ml-4  mx-auto  xl:max-w-[230px] lg:max-w-[200px] w-[500px]">
        <div className='bg-[#faca15] my-auto h-[14px] '></div>
        <div className='bg-[#121212]/15 my-auto h-[14px] '></div>
        <div className='bg-[#121212]/15 my-auto h-[14px] '></div>
        <div className='bg-[#121212]/15 my-auto h-[14px] '></div>
        <div className='bg-[#121212]/15 my-auto h-[14px] '></div>
      
        </div>
    
        <div className="xl:ml-0 ml-3  grid gap-1">
        <span className='ms-auto'> 100%</span>
        <span className='ms-auto'> 0%</span>
        <span className='ms-auto'> 0%</span>
        <span className='ms-auto'> 0%</span>
        <span className='ms-auto'> 0%</span>
        </div>
        </div>
        <div className="pt-3">
            {props.data.map((item, index)=>(
                <div className="border-2 md:min-h-full h-full mb-10 border-[#ccc] w-full m-auto p-7 " key={index  } >
                    <h4 className="font-semibold pb-7 text-[20px]">{item.title}</h4>
                    <div className="flex xl:gap-7 gap-3 flex-wrap m-auto items-center">
              <div className="flex my-auto flex-row xl:max-h-[40px] h-7">
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
                <img src="/assets/icons/star.png" alt="star" />
              </div>
              <div className="">
                <p>1 year ago</p>
              </div>
            </div>
            <div className=" xl:pt-10 pt-5">
              <p className="">
                {item.desc}
                {seeMore[index] && (
                  <span className="">
                    <span>{item.descPlus}</span>
                  </span>
                )}
              </p>
              <div className="flex w-full pt-3 ">
                <button
                  onClick={() => {
                    setSeeMore((prev) => {
                      const state = Array(props.data.length).fill(false);
                      state[index] = !prev[index];
                      return state;
                    });
                  }}
                  className="cursor-pointer  ms-auto text-orange  px-4   "
                >
                  {seeMore[index] ? "Afficher moins" : "Afficher plus"}
                </button>
              </div>
            </div>
            <p className="my-auto font-semibold">{item.name}</p>
                </div>
            )
            )}
        
        </div>
    </div>
  )
}

export default AllBlogs