"use client";

import Image from "next/image";

const data = await fetch("./friends.json");
const friends = await data.json();
// console.log(friends) ;

const Friends = () => {

    const statusBg = (status) => {
        if(status === 'overdue'){
            return 'bg-red-500' ;
        }
        if(status === 'almost due'){
            return 'bg-amber-500' ;
        }
        else{
            return 'bg-green-800' ;
        }
    }

    

  return (
    <>
    <h1 className="text-md font-bold mt-10"> Your Friends</h1>
    <div className="grid grid-cols-3 gap-6 my-4 mx-auto">
        
      {friends.map((friend, index) => (
        <div className="card bg-base-100 w-96 shadow-sm border border-amber-600 rounded-2xl" key={index}>
          <figure className="px-10 pt-10">
           <Image src={friend.picture} alt={friend.name} width='120' height='120' className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> {friend.name} </h2>
            <p> {friend.days_since_contact}d ago </p>

             <div className="flex gap-5">
             {friend.tags.map((tag, ind) =>
              
                <div key={ind} className='badge badge-success' > {tag} </div>
                 ) } 
                 </div>


            <div className={`badge ${statusBg(friend.status)} `}> {friend.status} </div>
            
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Friends;
