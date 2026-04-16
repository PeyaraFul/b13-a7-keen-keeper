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

            <h1 className='text-4xl font-bold my-2'>Timeline1</h1>
             {message.map((theMan, ind) => (

                <div key={ind} className="bg-base-300 rounded-box flex gap-4 my-4 shadow-md h-20 p-4">
          {" "}
          
        
            <div>
                { theMan.btnClicked === 'call' && (
                <IoCall className='text-3xl mt-1'></IoCall>
                )
                }
                { theMan.btnClicked === 'text' && (
                    <LuMessageCircleMore className='text-3xl mt-1'></LuMessageCircleMore>
                )
                }
                { theMan.btnClicked === 'video' && (
                    <FaVideo className='text-3xl mt-1'></FaVideo>
                )
                }
            </div>
            

            <div>
                <p className="text-md font-semibold"> 
                <strong> {theMan.btnClicked} </strong> with
                <span > {theMan.person}</span>
                </p> 
                <p>  {months[theMan.month-1]} {theMan.day}, {theMan.year}  </p>
            </div>
              
        </div>

            ))}
            
        </div>
    );
};

export default TimelinePage;