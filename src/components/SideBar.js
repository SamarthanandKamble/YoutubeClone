import React from "react";
import {
  Home,
  Film,
  Users,
  PlayCircle,
  User,
  Clock,
  ChevronRight,
  Watch,
  Download,
  ChevronDown,
} from "react-feather";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-60 bg-gray-950 p-1 h-screen z-40 fixed top-14 transition-all">
      <ul>
        <li>
          <Link to={"/"}>
            <div className="flex justify-between">
              <span className="px-2 py-1 ">
                <Home size={24} color="gray" width={60} />
              </span>
              <span className="p-1 mx-1 w-full">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1">
              <Film size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Shorts</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1">
              <Users size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Subscriptions</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between border-b-2 border-gray-800">
            <span className="px-2 py-1 ">
              <PlayCircle size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Youtube Music</span>
          </div>
        </li>
      </ul>

      <div className=" px-6 py-1 flex items-center">
        <span className="mx-2">You</span>
        <span className="ml-3">
          <ChevronRight size={20} />
        </span>
      </div>
      <ul>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 ">
              <User size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Your Channel</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 ">
              <Clock size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">History</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 ">
              <Home size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Your Videos</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 ">
              <Watch size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Watch Later</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 ">
              <Download size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Downloads</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between border-b-2 border-gray-800">
            <span className="px-2 py-1 ">
              <ChevronDown size={24} color="gray" width={60} />
            </span>
            <span className="p-1 mx-1 w-full">Show More</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
