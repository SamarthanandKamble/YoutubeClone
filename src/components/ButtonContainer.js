import React, { useState } from "react";
import { BUTTON_CONTAINER_LIST } from "../constants";
import { useSearchParams } from "react-router-dom";
const ButtonContainer = ({ length }) => {
  const param = useSearchParams();
  const [btnArray, setBtnArray] = useState(BUTTON_CONTAINER_LIST);

  const selectButtonFromCategory = (value) => {
    setBtnArray((prevBtnArray) =>
      prevBtnArray.map((item) => ({ ...item, selected: item.value === value }))
    );
  };

  return (
    <div
      className={` h-14 bg-gray-950 my-6  ${
        param[0].size
          ? "relative top-10 p-1 "
          : "fixed top-8 md:left-20 z-10 py-1 pr-3"
      }
       md:w-full w-full `}
    >
      <ul className="flex w-full overflow-x-auto">
        {btnArray.map((item, index) => {
          if (index > length) {
            return null;
          } else {
            return (
              <li
                key={item.value}
                onClick={() => selectButtonFromCategory(item.value)}
                className={`h-full px-2 py-1 border border-gray-400 mx-1 rounded-lg cursor-pointer font-semibold ${
                  item.selected ? "bg-white text-black" : "bg-gray-800"
                }`}
              >
                {item.value}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ButtonContainer;
