'use client'

import {useContext } from 'react';
import { LuMessageSquareText } from 'react-icons/lu';
import { TextContext } from '../context/TextContext';
import { IoIosVideocam } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';



const TextBtn = ({selectivePerson}) => {
     const {setMessage} =useContext(TextContext)


    
    
    const handleAction= (btnType)=>{
       const btnClicked = btnType ;
         const yy = new Date().getFullYear() ;
        const mm = new Date().getMonth() ;
        const dd = new Date().getDay() ;
        
        setMessage((prev) => [...prev, {btnClicked: btnClicked, person: selectivePerson.name, id: selectivePerson.id, year:yy, month:mm, day:dd}]);
    }
    
   

    
      
    
    // console.log(selectivePerson.name) ;

    return (
        <>
            <button onClick={()=>handleAction('call')} className="card bg-green-500 rounded-box grid h-20 grow place-items-center content-center cursor-pointer">
            <FiPhoneCall className="text-3xl" /> Call
                      </button>
            
            <button onClick={()=>handleAction('text')}  className="card bg-green-300 rounded-box grid h-20 grow place-items-center content-center cursor-pointer">
                <LuMessageSquareText className="text-3xl" /> Text
            </button>

            <button onClick={()=>handleAction('video')} className="card bg-green-300 rounded-box grid h-20 grow place-items-center content-center cursor-pointer">
                <IoIosVideocam className="text-3xl" /> Video
            </button>

        </>
    );
};

export default TextBtn;