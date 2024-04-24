"use client";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [openId, setOpenId] = useState(-1);

  const handleAccordion = (id) => {
    if (openId === id) {
      setOpenId(-1);
      return
    }
    setOpenId(id);
  };

  return (
    <div>
      {data.map((item) => (
        <div
          className="flex flex-col pt-[10px] xs:pt-[16px] md:pt-[26px] px-[10px] xs:px-[16px] md:px-[32px] pb-0 mb-[16px] md:mb-[20px] border border-[#ededed]"
          key={item.title}
        >
          <div
            className="flex-between w-full cursor-pointer transition-all duration-200 ease-linear"
            onClick={() => handleAccordion(item._id)}
          >
            <div className="text-[15px] xs:text-[20px] md:text-[24px] leading-[20px] xs:leading-[25px] md:leading-[29px] font-semibold">
              {item.title}
            </div>
            <AddIcon />
          </div>

          <div
            className={`w-full ${
              openId === item._id ? "h-[170px] xs:h-[126px]" : "h-0"
            } overflow-hidden mt-[10px] xs:mt-[16px] md:mt-[26px] transition-all duration-300 ease-linear`}
          >
            <p className="mb-0 pb-[16px] md:pb-[26px] text-[#3d3d3d] text-[13px] xs:text-[15px] md:text-[17px] leading-[23px] xs:leading-[25px] md:leading-[27px]">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
