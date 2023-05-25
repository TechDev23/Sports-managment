import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col border-2 border-red-500 w-1/5 h-screen p-1">
          <Sidebar />
        </div>
        <div className="w-4/5 m-1  mt-0 flex flex-col items-center justify-start">
          <div className="border-2 border-purple-400 w-full h-1/6">
            <Navbar />
          </div>
          <div className="border-2 border-yellow-500 my-1 w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
