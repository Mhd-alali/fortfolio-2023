import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import { Html, useProgress } from '@react-three/drei'


const Site = React.lazy(()=> import('./Site'))

const root = ReactDOM.createRoot(document.querySelector('#root'))
export const perspective = 600
const fov = 2. * Math.atan((innerHeight / 2) / perspective) * (180 / Math.PI)

function Loader() {
    const {active, progress, errors, item, loaded, total} = useProgress()

    return <Canvas>
        <Html center>{progress} % loaded</Html>
    </Canvas>
}

root.render(
    <>
        <Suspense fallback={<Loader />}>
            <Site />
        </Suspense>
    </>
)