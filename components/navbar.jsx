import React, { useState } from 'react';
import { FaBars, FaSearch, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div>
            <header className="max-w-screen-2xl mx-auto px-4 py-6">
                <nav className="flex justify-between items-center">
                    {/* Left Side */}
                    <div className="flex items-center md:gap-16 gap-4">
                        <Link href="/">
                            <FaBars className="w-6 h-6" />
                        </Link>
                    

                    {/* Center Search */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <FaSearch className="absolute inline-block left-3 inset-2" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
                        />
                    </div>
                    </div>

                    {/* Right Side */}
                    <div className ="relative flex items-center md:space-x-2">
                        <Link href="/">
                            <FaUserAlt className="w-6 h-6" />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
