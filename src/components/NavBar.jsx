import React from 'react';

export function NavBar({ }) {
    return (<nav className="flex fixed w-[calc(100vw-4rem)] items-center my-24 flex-col gap-20 sm:my-0 sm:flex-row sm:justify-between p-8">
        <button className="toggler fixed sm:invisible">
            <span className="bg-white fixed w-[35px] h-[2px] right-20 top-44"></span>
            <span className="bg-white fixed w-[30px] h-[2px] right-20 top-46"></span>
        </button>
        <h1 className="text-7xl font-display sm:text-xl place-self-start sm:place-self-center">MUHAMMADALALI</h1>
        <ul className="flex flex-col items-center text-5xl space-y-20 sm:text-base sm:visible sm:flex-row sm:space-y-0 sm:justify-end sm:space-x-8">
            <li onClick={() => { scrollTo({ top: 0 }) }} ><a href="#home">HOME</a></li>
            <li onClick={() => { scrollTo({ top: innerHeight }) }}><a href="#projects">PROJECTS</a></li>
            <li onClick={() => { scrollTo({ top: innerHeight * 2 }) }}><a href="#about">ABOUT</a></li>
            <li onClick={() => { scrollTo({ top: innerHeight * 3 }) }}><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>);
}
