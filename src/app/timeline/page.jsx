'use client'
import { useContext, useState } from 'react';
import { TextContext } from '../components/context/TextContext';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { LuMessageCircleMore } from 'react-icons/lu';
import { FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import StatsPage from '../stats/page';
import { CountContext } from '../components/context/CountContext';
import { useEffect } from "react";



const TimelinePage = () => {
        const {setCount} = useContext(CountContext) ;
      const  {message} = useContext(TextContext)

      const [visibleCard, setVisibleCard] = useState('None') ;
    const filterHandle = (e)=> {
       setVisibleCard(e.target.value) 
    }

    const months = [
         "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]; 

    const timelineCard =  message.map((theMan, ind) => (

                <div key={ind} className="bg-base-300 rounded-box flex gap-4 my-4 shadow-md h-20 p-4">
          {" "}
          
                {/* conditionaly icon setup */}
            <div>
                { theMan.btnClicked === 'Call' && (
                <IoCall className='text-3xl mt-1'></IoCall>
                )
                }
                { theMan.btnClicked === 'Text' && (
                    <LuMessageCircleMore className='text-3xl mt-1'></LuMessageCircleMore>
                )
                }
                { theMan.btnClicked === 'Video' && (
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

            ))


            // call filter function 
    const call = message.filter((call) =>(
        call.btnClicked === 'Call' 
    ))
    const callCard = call.map((theMan,ind) =>(
         <div key={ind} className="bg-base-300 rounded-box flex gap-4 my-4 shadow-md h-20 p-4">
          {" "}
          
                {/* conditionaly icon setup */}
            <div>
                { theMan.btnClicked === 'Call' && (
                <IoCall className='text-3xl mt-1'></IoCall>
                )
                }
                { theMan.btnClicked === 'Text' && (
                    <LuMessageCircleMore className='text-3xl mt-1'></LuMessageCircleMore>
                )
                }
                { theMan.btnClicked === 'Video' && (
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
    ))


    // text filter function 
    const text = message.filter((text) =>(
        text.btnClicked === 'Text' 
    ))
    const textCard = text.map((theMan,ind) =>(
         <div key={ind} className="bg-base-300 rounded-box flex gap-4 my-4 shadow-md h-20 p-4">
          {" "}
          
                {/* conditionaly icon setup */}
            <div>
                { theMan.btnClicked === 'Call' && (
                <IoCall className='text-3xl mt-1'></IoCall>
                )
                }
                { theMan.btnClicked === 'Text' && (
                    <LuMessageCircleMore className='text-3xl mt-1'></LuMessageCircleMore>
                )
                }
                { theMan.btnClicked === 'Video' && (
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
    ))


    // video filter function 
    const video = message.filter((video) =>(
        video.btnClicked === 'Video' 
    ))
    const videoCard = video.map((theMan,ind) =>(
         <div key={ind} className="bg-base-300 rounded-box flex gap-4 my-4 shadow-md h-20 p-4">
          {" "}
          
                {/* conditionaly icon setup */}
            <div>
                { theMan.btnClicked === 'Call' && (
                <IoCall className='text-3xl mt-1'></IoCall>
                )
                }
                { theMan.btnClicked === 'Text' && (
                    <LuMessageCircleMore className='text-3xl mt-1'></LuMessageCircleMore>
                )
                }
                { theMan.btnClicked === 'Video' && (
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
    ))
    // console.log(call.length) ;
  
        
        // set count of text call and video 
    useEffect(() => {
        setCount({text:text.length, call:call.length, video:video.length});
            }, [text, call, video, setCount]);



        // console.log(setCount) ;

    return (
        <div>

        <div className='hidden'>
            <FaHandshakeSimple />
            <LuMessageCircleMore />
            <FaVideo />
            <IoCall />
        </div>

            <h1 className='text-4xl font-bold my-2'>Timeline1</h1>


            {/* <DropDownMenu></DropDownMenu> */}
            <select onChange={filterHandle} defaultValue='None' className="select mt-4">
                <option value='None'>Filter Timeline</option>
                <option value='Call'>Call</option>
                <option value='Text'>Text</option>
                <option value='Video'>Video</option>
            </select>

            <div className={`${visibleCard==='None'? 'block': 'hidden'}`}>
                 {timelineCard}
            </div>

            <div className={`${visibleCard==='Text'? 'block': 'hidden'}`}>
                {textCard}
            </div>

            <div className={`${visibleCard==='Call'? 'block': 'hidden'}`}>
                {callCard}
            </div>

            <div className={`${visibleCard==='Video'? 'block': 'hidden'}`}>
                 {videoCard}  
            </div>
           
            
            
                     
            <div className='hidden'>
                <StatsPage text={text.length}  call={call.length} video={video.length} ></StatsPage>

            </div>
        </div>
    );
};

export default TimelinePage;




