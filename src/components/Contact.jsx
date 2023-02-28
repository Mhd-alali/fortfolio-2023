import React from 'react';

export function Contact({ }) {
    return (
        <section id="contact" className='min-h-[calc(100vh-4rem)]'>
            <h4 className="font-display text-8xl sm:text-5xl">Contact</h4>
            <input className="text-4xl block font-display p-1 outline-none bg-transparent border" type="text" placeholder='example@gmail.com'/>
            <input className="text-4xl block font-display p-1 outline-none bg-transparent border" type="text" placeholder='example@gmail.com'/>
        </section>
    )
}
