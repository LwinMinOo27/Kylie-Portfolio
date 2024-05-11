import React from "react";
import { CareerList } from "./const";

const WhatIdo = () => {
  const Career = CareerList;
  return (
    <>
      {Career.map((career) => (
        <ul className="list-none my-8 px-8">
          <li key={career.id}>
            {career.id % 2 !== 0 ? (
              <section
                className="
                  flex flex-col-reverse
                  lg:grid grid-flow-col grid-cols-2 items-center bg-neutral-100 rounded-2xl shadow-md       
                ">
                <div
                  className="
                  px-4 sm:max-w-xl mx-auto py-8 lg:py-0
                  ">
                  <p
                    className="
                      uppercase text-xl md:text-3xl font-orbitron font-semibold mb-8
                    ">
                    {career.title}
                  </p>
                  <p className="leading-6 sm:leading-8">{career.desc}</p>
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
                lg:grid grid-flow-col grid-cols-2 items-center bg-neutral-100 rounded-2xl shadow-md
                ">
                <img
                  src={career.img}
                  alt=""
                  className="
                   block rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none ring1 ring-neutral-100
                   "
                />
                <div className="px-4 sm:max-w-xl mx-auto py-8 lg:py-0">
                  <p className="uppercase text-xl md:text-3xl font-orbitron font-semibold mb-8">
                    {career.title}
                  </p>
                  <p className="leading-6 sm:leading-8">{career.desc}</p>
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
