import React, { useState, useEffect } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";

function InfiniteLoop({ name }) {
  const [content, setContent] = useState({
    hitmeup: <p>Hit me</p>,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prevContent) => ({
        ...prevContent,
        [name]: (
          <>
            {prevContent[name]}
            <p>{name === "hitmeup" ? "Hit me up" : "What I do"}</p>
          </>
        ),
      }));
    }, 1); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [name]);

  return (
    <div className="whitespace-nowrap overflow-hidden my-8 lg:my-16">
      <p
        className="uppercase text-7xl flex gap-12 font-bold font-mateSc"
        id="flowText">
        {content[name]}
      </p>
    </div>
  );
}

const Contact = () => {
  return (
    <div className="">
      <InfiniteLoop name="hitmeup" />
      <div className="block lg:grid grid-cols-2 grid-flow-col items-center mx-8 shadow-md rounded-2xl bg-gray-100">
        {/* img */}
        <div>
          <img
            src="coffee.png"
            alt=""
            className="block rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none ring1 ring-neutral-100 "
          />
        </div>
        {/* img */}

        {/* box */}
        <div className="max-w-full">
          <div className="max-w-sm mx-auto px-8 py-20 lg:p-0">
            <p className="uppercase py-2 font-bold text-3xl text-gray-900">
              Let's keep in touch
            </p>
            <form className="mt-8">
              <div className="flex w-full flex-col gap-6">
                <Input variant="static" label="Name" color="orange" />
                <Input variant="static" label="Email" color="orange" />
                <Textarea variant="static" label="Message" color="orange" />
              </div>
            </form>
            <div className="block lg:flex justify-between items-center mt-8 text-center lg:text-left">
              <p className="mb-8 lg:mb-0">kylieinyourarea@gmail.com</p>
              <button
                className="uppercase px-4 py-2 border-[1px] border-deep-orange-200 rounded-3xl text-orange-700 font-bold hover:shadow-lg hover:shadow-deep-orange-100
              transition ease-linear duration-100">
                Hit me up
              </button>
            </div>
          </div>
        </div>
        {/* box */}
      </div>
    </div>
  );
};

export default Contact;
