import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Toggler } from './components/Toggler';
import { lerp } from './animation';
import { Suspense } from 'react';
import { useProgress } from '@react-three/drei';

function App() {
    const scrollArea = useRef(null)

    useEffect(() => {
        document.body.style.height = `${scrollArea.current.getBoundingClientRect().height}px`
        let current = 0
        const tick = () => {
            current = lerp(current, -scrollY, .1)
            scrollArea.current.style.transform = `translate3d(0,${current}px,0)`
            requestAnimationFrame(tick)
        }
        tick()
    }, [])
    return (
        <>
            <Toggler />
            <div className="fixed z-10 m-8 sm:border dark:sm:border-gray-400 sm:border-neutral-900 wrapper outline outline-[10rem] outline-gray-200 dark:outline-black">
                <NavBar />
                <main ref={scrollArea} className="scrool-area w-[calc(100vw-4rem)] fixed -z-10 p-8 pt-96 sm:pt-8">
                    <Hero />
                    <Projects />
                    <About />
                    <Contact />
                </main>
            </div>

        </>

    );
}

export default App;