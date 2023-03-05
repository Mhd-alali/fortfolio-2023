import { Canvas } from '@react-three/fiber';
import React from 'react';
import App from './App';
import Experience from './components/experience'

export const perspective = 600
const fov = 2. * Math.atan((innerHeight / 2) / perspective) * (180 / Math.PI)

export default function Site() {
    return <>
        <App />
        {innerWidth > 500 &&
            <>
                <Canvas style={{ position: 'fixed' }} shadows camera={{ fov, aspect: innerWidth / innerHeight, near: 0.1, far: perspective * 2., position: [8, 4, perspective] }}>
                    <Experience />
                </Canvas>
            </>}
    </>;
}
