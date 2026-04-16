import React from 'react';
import { IoIosVideocam } from 'react-icons/io';

const VideoBtn = () => {
    return (
        <>
            <button className="card bg-green-300 rounded-box grid h-20 grow place-items-center content-center cursor-pointer">
            <IoIosVideocam className="text-3xl" /> Video
          </button>
        </>
    );
};

export default VideoBtn;