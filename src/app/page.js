
import { MdAdd } from "react-icons/md";
import Friends from "./components/navbar/Friends";

const data = await fetch("https://b13-a7-keen-keeper-nine.vercel.app/friends.json");
const friends = await data.json();

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn btn-primary"> <MdAdd/> Add a Friend</button>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-6">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          {" "}
          <h3 className="text-2xl font-semibold">10</h3> 10 friends
        </div>

        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          {" "}
          <h3 className="text-2xl font-semibold">3</h3> On Trak
        </div>
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <h3 className="text-2xl font-semibold">6</h3> Need Attention
        </div>
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <h3 className="text-2xl font-semibold">12</h3> Interactions This Month
        </div>
      </div>

    

    <Friends friends={friends}></Friends>



    </>
  );
}
