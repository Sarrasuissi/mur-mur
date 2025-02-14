"use client";
import data from "../../data/header.json";
import { Link } from "react-router-dom";

import "./header.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="shadow-lg headerClass bg-white">
      <div className="flex h-fit xl:w-defaultwidth w-[95%] 2xl:max-w-mwidth1 m-auto">
        <Link className="" to={"/"}>
          <img
            src="/assets/icons/mur-mur-logo.webp"
            alt="mur-mur"
            className="max-w-[130px] h-100 mt-2 image transform scale-110"
          />
        </Link>
        <div className="flex xl:hidden w-full ">
          <button
            className="xl:hidden ms-auto relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
        <div
          className={`basis-auto ${
            menuOpen
              ? "absolute min-w-72  "
              : "xl:block hidden ms-auto min-h-16 2xl:w-[80%] xl:w-[90%] w-[99%] h-full relative "
          } `}
        >
          <div className="">
            <div
              className={` bg-white  ${
                menuOpen ? "absolute right-[-100%]  p-4" : "flex  "
              }`}
            >
              {data.map((item, id) => (
                <div key={id} className="mx-auto mur grid grid-rows-5 ">
                  <div className="h-full row-span-2 "></div>
                  <div className="flex row-span-2 space-x-2 hover:text-orange  ">
                    <div className="mt-auto ">
                      <Link
                        to={`${item.notLink ? `${"#"}` : `/${item.url}`}`}
                        className="text-sm  "
                      >
                        {item.name}
                      </Link>
                    </div>
                    {item.submenuexiste && (
                      <FontAwesomeIcon
                        className="m-auto text-xs w-3 h-3"
                        icon={faChevronDown}
                      />
                    )}
                  </div>

                  <div className="absolute mt-14 bg-white pt-2 h-fit z-50">
                    {item.submenuexiste && (
                      <ul className="hidden shadow-lg list min-w-64 border-orange border-t-[3px]  p-3 ">
                        {item.submenu &&
                          item.submenu.length > 0 &&
                          item.submenu.map((e, index) => (
                            <li
                              key={index}
                              className="hover:bg-[#F5F5F5] relative flex itemOne w-full py-3 text-[14px]  text-black"
                            >
                              <Link
                                to={`${
                                  e.notLink ? `${"#"}` : `/${item.url}/${e.url}`
                                }`}
                                className="w-full"
                              >
                                {e.name}
                              </Link>

                              {e.submenuexiste && (
                                <div className="flex">
                                  <FontAwesomeIcon
                                    className="m-auto text-xs w-3 h-3 ms-auto"
                                    icon={faChevronRight}
                                  />
                                </div>
                              )}

                              {e.submenuexiste &&
                                e.submenu &&
                                e.submenu.length > 0 && (
                                  <ul className="itemTwo hidden min-w-52 absolute left-full border-t-[3px] px-6  bg-white shadow-lg border-orange">
                                    {e.submenu.map((itemTwo, ind) => (
                                      <li
                                        key={ind}
                                        className="py-3 hover:bg-[#F5F5F5] "
                                      >
                                        <Link
                                          to={`/${item.url}/${e.url}/${itemTwo.url}`}
                                          className="w-full text-sm text-black hover:text-blue "
                                        >
                                          {itemTwo.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
