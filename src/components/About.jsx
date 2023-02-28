import React from 'react';

export function About({ }) {
    return (
        <section id="about" className="projects min-h-[calc(100vh-4rem)] my-20 space-y-10">
            <h3 className="text-9xl sm:text-7xl font-display">Hey! im <span className="italic font-display">Muhammed E. Ali</span></h3>
            <p className="text-6xl space-y-5 sm:text-3xl child:block">
                <li className='ml-10'>• A twenty years old <span className="font-bold">IT</span> student In Cordoba private university.</li>
                <li className='ml-10'>• A creative developer based in North East Syria</li>
            </p>
        </section>
    );
}
