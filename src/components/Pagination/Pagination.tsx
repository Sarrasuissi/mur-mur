"use client";
import React, { useEffect, useState } from "react";

interface PaginationProps {
  datablogLength: number;
  changeNumber: (num: number) => void;
  viewData: number;
  numberPagination: number;
}

const Pagination: React.FC<PaginationProps> = ({
  datablogLength,
  changeNumber,
  viewData,
  numberPagination,
}) => {
  const pageCount = Math.ceil(datablogLength / viewData);
  const [finalNumber, setFinalNumber] = useState<number>(0);
  const handleChangeNumber = (num: number) => {
    setFinalNumber(num * viewData);
  };
  useEffect(() => {
    changeNumber(finalNumber);
  }, [changeNumber, finalNumber]);
  useEffect(() => {
    changeNumber(numberPagination);
    setFinalNumber(numberPagination);
  }, [changeNumber, numberPagination]);
  return (
    <nav aria-label="Navigation de page" className="flex justify-center py-5">
      <ul className="flex h-10 -space-x-px text-base">
        <li className="before:hidden">
          <button
            onClick={() =>
              setFinalNumber(
                finalNumber > viewData ? finalNumber - viewData : 0,
              )
            }
            className={`${
              finalNumber < viewData
                ? "cursor-not-allowed opacity-50"
                : "hover:border-orange hover:bg-orange hover:bg-opacity-70 hover:text-white"
            } flex h-10 items-center justify-center border border-gray bg-[#EFF1F2] px-4 text-[13px] font-semibold leading-tight text-[rgb(79,79,79)]`}
          >
            Précédent
          </button>
        </li>

        {Array.from(Array(pageCount).keys()).map((page) => (
          <li className="before:hidden" key={page + 1}>
            <button
              onClick={() => handleChangeNumber(page)} // Pass the page number to handleChangeNumber
              className={`flex h-10 items-center justify-center border border-gray px-4 leading-tight text-[rgb(79,79,79)] ${
                finalNumber / viewData === page
                  ? "border-orange bg-orange text-white"
                  : "hover:border-orange hover:bg-orange hover:bg-opacity-70 hover:text-white"
              }`}
              aria-current={page + 1 === 3 ? "page" : undefined}
            >
              {page + 1}
            </button>
          </li>
        ))}
        <li className="before:hidden">
          <button
            onClick={() =>
              setFinalNumber(
                finalNumber < datablogLength - viewData
                  ? finalNumber + viewData
                  : (pageCount - 1) * viewData,
              )
            }
            className={`${
              finalNumber >= datablogLength - viewData
                ? "cursor-not-allowed opacity-50"
                : "hover:border-orange hover:bg-orange hover:bg-opacity-70 hover:text-white"
            } flex h-10 items-center justify-center border border-gray bg-[#EFF1F2] px-4 text-[13px] font-semibold leading-tight text-[rgb(79,79,79)]`}
          >
            Suivant
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
