import React from 'react';

export function Hero({ }) {
    return (
        <section id="home" className="hero min-h-[calc(70vh)] sm:min-h-[calc(100vh-13rem)] relative">
            <h2 className="text-9xl sm:text-8xl w-min whitespace-nowrap mt-20 text-left child:block child:overflow-hidden">
                <span>CREATIVE</span>
                <span>FRONT-END</span>
                <span>WEB DEVELOPER</span>
            </h2>
            <p className="text-6xl font-display sm:text-xl mt-10">welcome to my 2023 portfolio</p>
            <p onClick={() => { scrollTo({ top: innerHeight }) }} className="scroll cursor-pointer text-5xl sm:text-lg absolute bottom-5">scroll down</p>
        </section>
    )
}
