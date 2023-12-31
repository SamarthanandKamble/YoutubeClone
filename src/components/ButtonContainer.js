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
      className={`bg-gray-950 mt-2 mb-3 pl-2 ${
        param[0].size ? "relative" : "absolute left-20 border"
      }`}
    >
      <ul className="flex w-full">
        {btnArray.map((item, index) => {
          if (index > length) {
            return null;
          } else {
            return (
              <li
                key={item.value}
                onClick={() => selectButtonFromCategory(item.value)}
                className={`px-2 py-1 border border-gray-400 mx-1 rounded-lg cursor-pointer font-semibold ${
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
