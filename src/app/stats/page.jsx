'use client'
import React, { useContext } from 'react';
import { Pie, PieChart, Cell, Tooltip } from 'recharts';
import { CountContext } from '../components/context/CountContext';


const StatsPage = () => {
  const {count} = useContext(CountContext)
  

  // console.log(call,text,video)
  const data = [
  { name: 'Call', value: count.call},
  { name: 'Text', value: count.text},
  { name: 'Video', value: count.video},
  ];
  const color = ['purple', 'green', 'red'] ;
    return (
        <div>
            <h1 className=' text-3xl font-bold mt-4'>Friendship Analytics</h1>


        <PieChart className='mx-auto bg-gray-50 shadow-2xl mb-4 rounded-2xl' width={400} height={400} aspectRatio={1}>
          <Tooltip></Tooltip>
          <Pie data={data} dataKey='value' cx='50%' cy='50%' outerRadius={100} innerRadius={80}  >

          {data.map((entry, ind)=> (
             <Cell key={ind} fill={color[ind]}></Cell>
          ))}
          </Pie>
          
          
        </PieChart>
        <div className='flex gap-5 justify-center mb-4'>
          <div className=' text-white px-2 rounded-sm bg-purple-600 text-sm'>Call</div>
          <div className=' text-white px-2 rounded-sm bg-green-600 text-sm'>Text</div>
          <div className=' text-white px-2 rounded-sm bg-red-600 text-sm'>Video</div>
        </div>
  



        </div>
    );
};

export default StatsPage;