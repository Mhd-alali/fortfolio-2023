import React from 'react';

export function Projects({ }) {

    return (
        <section id="projects" className="projects min-h-[calc(100vh-4rem)] my-56">
            <h4 className="font-display text-8xl sm:text-5xl">PROJECTS</h4>
            <ul className="flex flex-col mt-20 child:hover:opacity-[0.2]">
                <li className="project-item">playground</li>
                <li className="project-item">inteo</li>
                <li className="project-item">weather app</li>
                <li className="project-item">yummy in the tummy</li>
            </ul>
        </section>
    );
}
