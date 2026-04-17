import Image from "next/image";
import React from "react";
import { IoArchive, IoNotificationsOffSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Btn from "../components/button/Btn";

const FriendsDetails = async ({ params }) => {
  const { friendId } = await params;

  const data = await fetch(
    "https://b13-a7-keen-keeper-nine.vercel.app/friends.json",
  );
  const friends = await data.json();
  // console.log(friendId)

  const selectivePerson = friends.find((person) => person.id == friendId);

  const statusBg = (status) => {
    if (status === "overdue") {
      return "bg-red-500";
    }
    if (status === "almost due") {
      return "bg-amber-500";
    } else {
      return "bg-green-800";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div className="card bg-base-100 shadow-2xl mt-2 rounded-2xl">
          <figure className="px-10 pt-10">
            <Image
              src={selectivePerson?.picture}
              alt={selectivePerson?.name}
              width={100}
              height={100}
              className="rounded-full border border-green-200"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> {selectivePerson?.name} </h2>
            <p> {selectivePerson?.days_since_contact}d ago </p>

            <div className="flex gap-5">
              {selectivePerson?.tags.map((tag, ind) => (
                <div key={ind} className="badge badge-success">
                  {" "}
                  {tag}{" "}
                </div>
              ))}
            </div>

            <div className={`badge ${statusBg(selectivePerson?.status)} `}>
              {" "}
              {selectivePerson?.status}{" "}
            </div>
            <p> {selectivePerson?.bio} </p>
            <p>Preferred: {selectivePerson?.email} </p>
          </div>
        </div>
        <button className="card bg-base-300 rounded-box flex h-10 justify-center items-center flex-row mt-6 gap-2 w-full cursor-pointer">
          <IoNotificationsOffSharp /> Snooze 2 weeks
        </button>
        <button className="card bg-base-300 rounded-box flex h-10 justify-center items-center flex-row mt-2 gap-2 w-full cursor-pointer">
          <IoArchive /> Archive
        </button>
        <button className="card bg-base-300 rounded-box flex h-10 justify-center items-center flex-row mt-2 gap-2 w-full cursor-pointer">
          <RiDeleteBin6Line /> Delete
        </button>
      </div>

      <div className="col-span-2 row-span-3">
        <div className="flex w-full gap-3 p-4">
          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            {" "}
            <h3 className="text-2xl font-semibold">
              {selectivePerson?.days_since_contact}
            </h3>
            Days Since Contact
          </div>

          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <h3 className="text-2xl font-semibold"> {selectivePerson?.goal}</h3>{" "}
            Goal (Days)
          </div>

          <div className="card bg-base-300 rounded-box grid grow place-items-center p-4">
            <h3 className="text-2xl font-semibold">
              {" "}
              {selectivePerson?.next_due_date}
            </h3>{" "}
            Goal (Days)
          </div>
        </div>

        <div className="card bg-base-300 rounded-box grid h-20 grow p-4">
          <h3 className="text-xl font-semibold relative">
            {" "}
            Relationship Goal{" "}
          </h3>{" "}
          Connect every 30 days
          <button className="btn w-20 absolute right-1 top-1">Edit</button>
        </div>


        {/* call, text and video button */}
        <div className="card bg-base-300 rounded-box mt-3 p-5">
          <h2 className="text-lg font-semibold -mt-2">Quick Check-In</h2>
          <div className=" flex justify-between gap-6 flex-row">
            <Btn selectivePerson={selectivePerson}></Btn>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FriendsDetails;
