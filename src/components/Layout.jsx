'use client'
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <main className={`transition-transform duration-300 ease-in-out  ${!isOpen ? 'ml-64' : 'ml-0'} w-full`}>
                {children}
            </main>
        </div>
    )
}