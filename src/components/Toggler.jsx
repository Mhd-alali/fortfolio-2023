import React from 'react';



export function Toggler({ }) {
    
    return (
    <div className="fixed text-sm bottom-[3.3rem] invisible sm:visible z-20 -left-4 flex flex-col gap-16">
        <div className="theme-btn dark-toggler bottom-20 ">
            DARK
            <span className="box bg-white dark:bg-black border-black dark:border-white"></span>
        </div>
        <div className="theme-btn light-toggler bottom-40 -left-[3px]">
            LIGHT
            <span className="box bg-black dark:bg-white border-white dark:border-black"></span>
        </div>
    </div>
    );
}
