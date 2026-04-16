import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const CallBtn = () => {
    return (
        <>
            <button className="card bg-green-500 rounded-box grid h-20 grow place-items-center content-center cursor-pointer">
            <FiPhoneCall className="text-3xl" /> Call
          </button>
        </>
    );
};

export default CallBtn;