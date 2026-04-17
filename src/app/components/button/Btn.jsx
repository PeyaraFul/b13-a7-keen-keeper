"use client";

import { useContext } from "react";
import { LuMessageSquareText } from "react-icons/lu";
import { TextContext } from "../context/TextContext";
import { IoIosVideocam } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

const Btn = ({ selectivePerson }) => {
  const { setMessage } = useContext(TextContext);

  const handleAction = (btnType) => {
    const btnClicked = btnType;
    const yy = new Date().getFullYear();
    const mm = new Date().getMonth();
    const dd = new Date().getDay();

    setMessage((prev) => [
      ...prev,
      {
        btnClicked: btnClicked,
        person: selectivePerson.name,
        id: selectivePerson.id,
        year: yy,
        month: mm,
        day: dd,
      },
    ]);
    toast.success(`${btnType} with ${selectivePerson.name}`);
    // toast.success('heh')
  };

  // console.log(selectivePerson.name) ;

  return (
    <>
      <button
        onClick={() => handleAction("Call")}
        className="card bg-green-200 rounded-box grid h-20 grow place-items-center content-center cursor-pointer"
      >
        <FiPhoneCall className="text-3xl" /> Call
      </button>

      <button
        onClick={() => handleAction("Text")}
        className="card bg-green-200 rounded-box grid h-20 grow place-items-center content-center cursor-pointer"
      >
        <LuMessageSquareText className="text-3xl" /> Text
      </button>

      <button
        onClick={() => handleAction("Video")}
        className="card bg-green-200 rounded-box grid h-20 grow place-items-center content-center cursor-pointer"
      >
        <IoIosVideocam className="text-3xl" /> Video
      </button>
    </>
  );
};

export default Btn;
