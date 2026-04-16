'use client'
import { useContext } from 'react';
import { TextContext } from '../components/context/TextContext';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { LuMessageCircleMore } from 'react-icons/lu';
import { FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';


const TimelinePage = () => {
    const  {message} = useContext(TextContext)

    console.log(message)
    const months = [
         "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];


    return (
        <div>

        <div className='hidden'>
            <FaHandshakeSimple />
            <LuMessageCircleMore />
            <FaVideo />
            <IoCall />
        </div>

            Timeline1:
             {message.map((theMan, ind) => (

                <div key={ind} className="card bg-base-300 rounded-box grid h-20 grow items-center p-4">
          {" "}
          <p className="text-xl font-semibold"> <strong>Metup</strong> with
            <span >{theMan.person}</span>
            </p> 
            <p>  {months[theMan.month-1]} {theMan.day}, {theMan.year} </p>
        </div>

            ))}
            
        </div>
    );
};

export default TimelinePage;