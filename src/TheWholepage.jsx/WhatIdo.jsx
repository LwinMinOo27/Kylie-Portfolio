import React from "react";
import { CareerList } from "./const";

const WhatIdo = () => {
  const Career = CareerList;
  return (
    <>
      {Career.map((career) => (
        <ul className="list-none px-8">
          <li key={career.id}>
            {career.id % 2 !== 0 ? (
              <section
                className="
                  flex flex-col-reverse
                  lg:grid grid-flow-col grid-cols-2 items-center bg-gray-100 rounded-2xl shadow-md       
                ">
                <div
                  className="
                  block py-24 px-6 sm:px-16 md:px-20 lg:py-0 xl:px-24 2xl:px-36
                  ">
                  <p
                    className="
                      uppercase text-3xl font-mateSc font-semibold mb-8
                    ">
                    {career.title}
                  </p>
                  <p className="leading-8 font-dmSans">{career.desc}</p>
                </div>
                <img
                  src={career.img}
                  alt=""
                  className="
                    block rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none ring1 ring-neutral-100
                  "
                />
              </section>
            ) : (
              <section
                className="
                block
                lg:grid grid-flow-col grid-cols-2 items-center bg-gray-100 rounded-2xl shadow-md
                ">
                <img
                  src={career.img}
                  alt=""
                  className="
                   block rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none ring1 ring-neutral-100
                   "
                />
                <div className="block py-24 px-6 sm:px-16 md:px-20 lg:py-0 xl:px-24 2xl:px-36">
                  <p className="uppercase text-3xl font-mateSc font-semibold mb-8">
                    {career.title}
                  </p>
                  <p className="leading-8 font-dmSans">{career.desc}</p>
                </div>
              </section>
            )}
          </li>
        </ul>
      ))}
    </>
  );
};

export default WhatIdo;
