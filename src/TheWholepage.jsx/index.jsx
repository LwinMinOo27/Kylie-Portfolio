import React, { useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import WhatIdo from "./WhatIdo.jsx";
import Feedback from "./Feedback.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { About } from "./const.jsx";

function InfiniteLoop({ name }) {
  const [content, setContent] = useState({
    whoiam: <p>Who i am</p>,
    whatIdo: <p>What I do</p>,
    makeyouShine: <p>Make you shine</p>,
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
    <div className="whitespace-nowrap overflow-hidden my-8 lg:my-16">
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
      <div className="max-w-full mx-8 bg-gray-100 lg:ring-1 lg:ring-gray-100 rounded-2xl shadow-md ">
        {aboutMe.map((myInfo) => (
          <div className="block lg:grid grid-flow-col grid-cols-2 lg:h-screen items-center">
            <img
              src={myInfo.img}
              alt=""
              className="block w-full lg:h-screen object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
            />
            <div className="block py-24 px-6 sm:px-16 md:px-20 lg:py-0 xl:px-24 2xl:px-36">
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
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
