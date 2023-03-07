import React from 'react';

export function Contact({ }) {
    return (
        <section id="contact" className='min-h-[calc(100vh-4rem)]'>
            <h4 className="font-display text-8xl sm:text-5xl">Enough about me let's talk about you</h4>
            <form action='contact' className="space-y-4 my-24">
                <Input type={'text'} placeholder='Your name' />
                <Input type={'email'} placeholder='Your Email' />
                <Input type={'text'} placeholder='Tell us about your project' />
                <button className='text-xl px-3 py-2 border hover:backdrop-brightness-50 transition duration-200' type='submit' >
                    Send Email
                </button>
            </form>
        </section>
    )
}

function Input({ placeholder , type }) {
    return <input className="text-3xl font-source placeholder:font-source placeholder:text-2xl placeholder:font-thin block p-2 outline-none bg-transparent border-b w-full" type={type} spellCheck={false} placeholder={placeholder} />
}