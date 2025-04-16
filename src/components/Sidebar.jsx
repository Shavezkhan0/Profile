'use client';
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const usePath = usePathname();

  return (
    <>
      {/* Menu Icon - always visible */}
      <div className="fixed top-4 left-4 z-20">
        <IoMenu
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer text-black hover:opacity-80"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full text-black w-64 bg-[#F9F9F9] 
          transform ${!isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="w-full h-16 px-4 flex items-center gap-4">
          <IoMenu
            size={30}
            onClick={toggleSidebar}
            className="cursor-pointer text-black hover:opacity-80"
          />
          <h1 className="font-bold text-lg">Shavez Khan</h1>
        </div>

        <ul>
          <li className="mx-4 my-2">
            <Link
              href="/"
              className={`block px-4 py-2 rounded-lg ${usePath === "/" ? "bg-[#ECECEC]" : ""
                } hover:bg-[#ECECEC] hover:text-black text-lg font-semibold font-mono flex items-center gap-2`}
              onClick={() => setIsOpen(false)}
            >
              <HiOutlineUser size={25} />
              About
            </Link>
          </li>
          <li className="mx-4 my-2">
            <Link
              href="/education"
              className={`block px-4 py-2 rounded-lg ${usePath === "/education" ? "bg-[#ECECEC]" : ""
                } hover:bg-[#ECECEC] hover:text-black text-lg font-semibold font-mono flex items-center gap-2`}
              onClick={() => setIsOpen(false)}
            >
              <FaGraduationCap size={25} />
              Education
            </Link>
          </li>
          <li className="mx-4 my-2">
            <Link
              href="/projects"
              className={`block px-4 py-2 rounded-lg ${usePath === "/projects" ? "bg-[#ECECEC]" : ""
                } hover:bg-[#ECECEC] hover:text-black text-lg font-semibold font-mono flex items-center gap-2`}
              onClick={() => setIsOpen(false)}
            >
              <MdWorkOutline size={25} />
              Projects
            </Link>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Sidebar;
