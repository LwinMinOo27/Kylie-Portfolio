import React from "react";
import { InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="mx-8 flex justify-center items-center bg-gray-100 py-32 rounded-t-2xl mt-8">
      <div className="text-center">
        <p className="uppercase font-semibold font-mateSc text-4xl mb-8">
          Kylie Summer
        </p>
        <div className="space-y-4">
          <p className="uppercase text-xs">privacy policy</p>
          <p>
            <InstagramOutlined style={{ fontSize: "2em" }} />
          </p>
          <div className="uppercase">
            <p className="tracking-tighter text-xs">website development</p>
            <p className="tracking-tigher text-lg font-bold">lwin min oo</p>
          </div>
          <p className="font-poppins text-xs"> &#169; 2023 Kylie Summer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
