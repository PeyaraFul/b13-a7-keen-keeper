'use client'

import {useContext } from 'react';
import { LuMessageSquareText } from 'react-icons/lu';
import { TextContext } from '../context/TextContext';
import TimelineCard from '../timelineCard/TimelineCard';


const TextBtn = ({selectivePerson}) => {

    const id= selectivePerson.id
    const timelineDetails = (
    <div className="card bg-base-300 rounded-box grid h-20 grow p-4 ">
          
          <h3 className="text-2xl font-semibold">
            meet with Akash
            </h3> march 29, 2026
        </div>
    )

    const {setMessage} =useContext(TextContext)

    const handleCall=() =>{
        const yy = new Date().getFullYear() ;
        const mm = new Date().getMonth() ;
        const dd = new Date().getDay() ;
        
        setMessage((prev) => [...prev, {person: selectivePerson.name, id: selectivePerson.id, year:yy, month:mm, day:dd}]);
      
    }
    // console.log(selectivePerson.name) ;

    return (
        <>
            <div className='hidden'>
                <TimelineCard id={id} ></TimelineCard>
            </div>
            
            <button onClick={handleCall}  className="card bg-green-300 rounded-box grid h-20 grow place-items-center content-center cursor-pointer">
                <LuMessageSquareText className="text-3xl" /> Text
            </button>
        </>
    );
};

export default TextBtn;