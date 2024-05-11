import React, { useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import WhatIdo from "./WhatIdo.jsx";
import Feedback from "./Feedback.jsx";
import { About } from "./const.jsx";

function InfiniteLoop({ name }) {
  const [content, setContent] = useState({
    whoiam: <p>Who i am</p>,
    whatIdo: <p>What I do</p>,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prevContent) => ({
        ...prevContent,
        [name]: (
          <>
            {prevContent[name]}
            <p>{name === "whoIam" ? "Who I am" : "What I do"}</p>
          </>
        ),
      }));
    }, 1); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [name]);

  return (
    <div className="max-w-[1900px] whitespace-nowrap overflow-hidden my-8 lg:my-16">
      <p
        className="uppercase text-7xl flex gap-12 font-bold font-mateSc"
        id="flowText">
        {content[name]}
      </p>
    </div>
  );
}

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Graphics Designer", "Photographer", "Freelancer", "Coffeeholic"],
    loop: 0,
  });

  return (
    <div>
      <span className="uppercase">{text}</span>
    </div>
  );
};

const App = () => {
  const aboutMe = About;

  return (
    <main>
      {/* Who I am */}
      <div>
        <InfiniteLoop name="whoIam" />
      </div>
      <div className="max-w-full mx-8 bg-neutral-100 lg:ring-1 lg:ring-neutral-100 rounded-2xl ">
        {aboutMe.map((myInfo) => (
          <div className="block lg:grid grid-flow-col grid-cols-2 lg:h-screen items-center">
            <img
              src={myInfo.img}
              alt=""
              className="block w-full lg:h-screen object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
            />
            <div className="block px-4 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-0 2xl:px-24">
              <p className="leading-8 font-dmSans">{myInfo.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <InfiniteLoop name="whatIdo" />
      </div>
      {/* Who I am */}
      <WhatIdo />
      <Feedback />
    </main>
  );
};

export default App;
